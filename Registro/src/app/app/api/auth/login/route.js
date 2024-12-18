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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const server_1 = require("next/server");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("@/lib/prisma");
const auth_1 = require("@/lib/validations/auth");
const auth_2 = require("@/lib/auth");
function POST(request) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = yield request.json();
            const validatedData = auth_1.loginSchema.parse(body);
            // Find user
            const user = yield prisma_1.prisma.user.findUnique({
                where: { email: validatedData.email },
            });
            if (!user) {
                return server_1.NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
            }
            // Verify password
            const validPassword = yield bcryptjs_1.default.compare(validatedData.password, user.password);
            if (!validPassword) {
                return server_1.NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 });
            }
            // Create token
            const token = yield (0, auth_2.createToken)({
                id: user.id,
                email: user.email,
                role: user.role,
            });
            // Set cookie
            (0, auth_2.setAuthCookie)(token);
            return server_1.NextResponse.json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            });
        }
        catch (error) {
            console.error('Login error:', error);
            return server_1.NextResponse.json({ error: 'Erro ao fazer login' }, { status: 500 });
        }
    });
}
