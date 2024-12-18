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
exports.createToken = createToken;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.setAuthCookie = setAuthCookie;
exports.removeAuthCookie = removeAuthCookie;
const jose_1 = require("jose");
const headers_1 = require("next/headers");
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
function createToken(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = yield new jose_1.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1d')
            .sign(new TextEncoder().encode(JWT_SECRET));
        return token;
    });
}
function verifyToken(token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { payload } = yield (0, jose_1.jwtVerify)(token, new TextEncoder().encode(JWT_SECRET));
            return payload;
        }
        catch (error) {
            return null;
        }
    });
}
function getUser(request) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const token = (_a = request.cookies.get('token')) === null || _a === void 0 ? void 0 : _a.value;
        if (!token)
            return null;
        const payload = yield verifyToken(token);
        return payload;
    });
}
function setAuthCookie(token) {
    (0, headers_1.cookies)().set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 1 day
    });
}
function removeAuthCookie() {
    (0, headers_1.cookies)().delete('token');
}
