import { Webhook } from 'svix'
import { headers } from 'next/headers'

export async function POST(req) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET
  const headerPayload = await headers()
  
  // Get Svix headers
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If no Svix headers, treat as a test request
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.log('Test request received - no Svix headers')
    const payload = await req.json()
    console.log('Test payload:', payload)
    return new Response('Test request received', { status: 200 })
  }

  // Handle actual Clerk webhook
  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  const wh = new Webhook(SIGNING_SECRET)
  const payload = await req.json()
  const body = JSON.stringify(payload)

  try {
    const evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    })
    console.log('Verified Clerk webhook:', evt)
    return new Response('Webhook received and verified', { status: 200 })
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }
}