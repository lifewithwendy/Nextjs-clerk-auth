import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { createOrUpdateUser, deleteUser } from '../../../../lib/actions/user'

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET
  const headerPayload = await headers()
  
  // Get Svix headers
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // If no Svix headers, treat as a test request from Insomnia
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log('Test request received:', {
      body: payload,
      headers: Object.fromEntries(headerPayload.entries())
    })
    
    // Handle test data as if it were a real webhook
    const { type: eventType, data } = payload
    
    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { id, first_name, last_name, image_url, email_addresses, username } = data
      const email = email_addresses?.[0]?.email_address
      
      try {
        await createOrUpdateUser(
          id,
          first_name,
          last_name,
          username,
          image_url,
          email
        )
        console.log('Test user created/updated:', id)
      } catch (error) {
        console.error("Error creating/updating test user:", error)
        return new Response('Error: Could not create/update test user', {
          status: 500,
        })
      }
    }

    if (eventType === 'user.deleted') {
      const { id } = data
      try {
        await deleteUser(id)
        console.log('Test user deleted:', id)
      } catch (error) {
        console.error("Error deleting test user:", error)
        return new Response('Error: Could not delete test user', {
          status: 500,
        })
      }
    }

    return new Response('Test request processed and saved to database', { status: 200 })
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  let evt

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }

  // Do something with payload
  // For this guide, log payload to console
  const { id } = evt?.data
  const eventType = evt?.type
  console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
  console.log('Webhook payload:', body)

  if (eventType === 'user.created' || eventType === 'user.updated') {
    const { first_name, last_name, image_url, email_addresses, username } = evt?.data;
    const email = email_addresses[0].email_address;
    
    try {
      await createOrUpdateUser(
        id, 
        first_name, 
        last_name, 
        username, 
        image_url, 
        email
      )
      console.log('User created:', id)
    } catch (error) {
      console.error("Error creating or updating user:", error);
      return new Response('Error: Could not create or update user', {
        status: 500,
      })
    }

  }

  if(eventType === 'user.deleted') {
    try {
      await deleteUser(id)
      console.log('User deleted:', id)
    } catch (error) {
      console.error("Error deleting user:", error);
      return new Response('Error: Could not delete user', {
        status: 500,
      })
    }
  }
 

  return new Response('Webhook received', { status: 200 })
}