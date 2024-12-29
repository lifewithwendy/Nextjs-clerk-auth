import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { createOrUpdateUser, deleteUser } from '../../../lib/actions/user'

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET1
  const headerPayload = await headers()
  
  // Get Svix headers
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  // If no Svix headers, treat as a test request
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log('Test request received:', {
      body: payload,
      headers: Object.fromEntries(headerPayload.entries())
    })
    
    const { type: eventType, data } = payload
    
    if (eventType === 'user.created' || eventType === 'user.updated') {
      try {
        const userData = {
          id: data.id,
          first_name: data.first_name || data.firstName || '',
          last_name: data.last_name || data.lastName || '',
          username: data.username || data.id,
          image_url: data.image_url || data.imageUrl || '',
          email_addresses: [{ email_address: data.email_address || data.email || '' }]
        }

        await createOrUpdateUser(
          userData.id,
          userData.first_name,
          userData.last_name,
          userData.image_url,
          userData.email_addresses,
          userData.username
        )
        console.log('Test user created/updated:', userData.id)
        console.log(userData);
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

    return new Response('Test request processed', { status: 200 })
  }

  // Handle actual webhook
  try {
    const wh = new Webhook(SIGNING_SECRET)
    const evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })

    const { id } = evt.data
    const eventType = evt.type

    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { 
        first_name, 
        last_name, 
        image_url, 
        email_addresses, 
        username 
      } = evt.data

      await createOrUpdateUser(
        id,
        first_name || '',
        last_name || '',
        image_url || '',
        email_addresses?.[0]?.email_address || '',
        username || id
      )
      console.log('User created/updated:', id)
      console.log(evt.data);
    }

    if(eventType === 'user.deleted') {
      await deleteUser(id)
      console.log('User deleted:', id)
    }

    return new Response('Webhook processed', { status: 200 })
  } catch (err) {
    console.error('Webhook error:', err)
    return new Response('Webhook error', { status: 400 })
  }
}