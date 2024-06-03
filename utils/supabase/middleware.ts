import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'


/*
updateSession is a function that will be exported... to be used via import in 
our root middleware.ts file.
*/

//The request object from the our root middleware.ts file is being based here... so this is itnercepting an incoming req.
export async function updateSession(request: NextRequest) {

  let response = NextResponse.next({ // a NextResponse object allowws request to proceed to next middleware or route handler
    request: {
      headers: request.headers,
    },
  })
  /*
  We're not actually modifying any headers, but simply initializing the reponse object to modified and used later by Supabase.
  The main purpose here is to prepare the response object for potential modifications (such as setting or removing cookies).
  */


  /*
  NextResponse breakdown:
  - Cookies, it can read or mutate the Set-Cookie header in a response
  - Set, given any name (arbitrary) we can set a cookie with the value on response like set('show-banner', false) cookie response will have a `Set-Cookie:show-banner=false;path=/home` header
  - Get, given name it will give you the value of the header... so get(show-banner) will give us 'false'
  - GetAll... gets all cookies
  - Delete...obvious

  */

  //The Supabase client is initialized with a cookies object that includes methods to get, set, and remove cookies.
  // This is where our earlier setup of the response object will come into play.

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      /*
      The cookies object in the Supabase client configuration is essentially a 
      custom implementation to handle cookie operations (get, set, remove) within the context of a server-side request and response in Next.js. 
      
      In the cookies object, we've basically transposed our reponse object as a data source for the cookie object functions to be used later on.
      We're not direcrtly using them in this code...but the Supabase object can access it later for future operations... let getUser()

      Supabase's auth functionality relies on cookies to store and retrieve session information, such as authentication tokens.
      By providing custom implementations of get, set, and remove methods for cookies, we allow the Supabase client to manage cookies appropriately during authentication and session handling.
      */
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  /*
Supabase Auth Methods:

    When you call supabase.auth.getUser(), the Supabase client uses the custom cookies object methods to access or modify the necessary cookies for authentication.
    For example, getUser might call the get method to retrieve the current session token stored in a cookie.
  */

  // refreshing the auth token
  await supabase.auth.getUser()

  return response
}