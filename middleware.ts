import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

/* 
Middleware.TS which is located at the project route essentially intercepts requests
before they reach their inteded route.
*/

//We can import functions from other files... in this case updateSession is being imported.

export async function middleware(request: NextRequest) {
  // update user's auth session
  return await updateSession(request) //this this response from Supabase's auth service...
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}