import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getUser } from './lib/auth';

export async function middleware(request: NextRequest) {
  // Protected routes
  const protectedPaths = [
    '/dashboard',
    '/civil-union/register',
    '/admin',
    '/employee',
  ];

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath) {
    const user = await getUser(request);

    if (!user) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Role-based access control
    if (request.nextUrl.pathname.startsWith('/admin') && user.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (request.nextUrl.pathname.startsWith('/employee') && 
        !['EMPLOYEE', 'ADMIN'].includes(user.role)) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/civil-union/:path*',
    '/admin/:path*',
    '/employee/:path*',
  ],
};