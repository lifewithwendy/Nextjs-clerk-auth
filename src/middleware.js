import { clerkMiddleware } from '@clerk/nextjs/server'

const publicRoutes = [
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhooks(.*)'  // Make sure this matches exactly
]

// Use authMiddleware instead of clerkMiddleware for better route handling
export default clerkMiddleware((auth, req) => {
  // Explicitly skip middleware for webhook routes
  const url = new URL(req.url)
  if (url.pathname.startsWith('/api/webhooks')) {
    return // Skip middleware completely for webhooks
  }
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/webhooks (webhook routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/webhooks|_next/static|_next/image|favicon.ico).*)",
  ],
}