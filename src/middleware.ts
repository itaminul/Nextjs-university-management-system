import { NextResponse } from 'next/server';

export function middleware(request: any) {
   return NextResponse.redirect(new URL('/', request.url));
}

// export { default } from 'next-auth/middleware';

 export const config = {
   matcher: ['/components/', '/layouts/'],
 };
