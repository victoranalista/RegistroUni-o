"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.middleware = middleware;
const server_1 = require("next/server");
const auth_1 = require("../src/lib/auth");
function middleware(request) {
    return __awaiter(this, void 0, void 0, function* () {
        // Protected routes
        const protectedPaths = [
            '/dashboard',
            '/civil-union/register',
            '/admin',
            '/employee',
        ];
        // Check if the path is protected
        const isProtectedPath = protectedPaths.some(path => request.nextUrl.pathname.startsWith(path));
        if (isProtectedPath) {
            const user = yield (0, auth_1.getUser)(request);
            if (!user) {
                return server_1.NextResponse.redirect(new URL('/auth/login', request.url));
            }
            // Role-based access control
            if (request.nextUrl.pathname.startsWith('/admin') && user.role !== 'ADMIN') {
                return server_1.NextResponse.redirect(new URL('/', request.url));
            }
            if (request.nextUrl.pathname.startsWith('/employee') &&
                !['EMPLOYEE', 'ADMIN'].includes(user.role)) {
                return server_1.NextResponse.redirect(new URL('/', request.url));
            }
        }
        return server_1.NextResponse.next();
    });
}
exports.config = {
    matcher: [
        '/dashboard/:path*',
        '/civil-union/:path*',
        '/admin/:path*',
        '/employee/:path*',
    ],
};
