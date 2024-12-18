"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.civilUnionSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    name: zod_1.z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: zod_1.z.string().email('Email inválido'),
    password: zod_1.z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
    confirmPassword: zod_1.z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Email inválido'),
    password: zod_1.z.string().min(1, 'Senha é obrigatória'),
});
exports.civilUnionSchema = zod_1.z.object({
    startDate: zod_1.z.date(),
    partner1: zod_1.z.object({
        name: zod_1.z.string().min(3),
        cpf: zod_1.z.string().regex(/^\d{11}$/, 'CPF inválido'),
        rg: zod_1.z.string().min(1, 'RG é obrigatório'),
        birthDate: zod_1.z.date(),
        nationality: zod_1.z.string().min(1, 'Nacionalidade é obrigatória'),
        civilStatus: zod_1.z.string().min(1, 'Estado civil é obrigatório'),
        profession: zod_1.z.string().min(1, 'Profissão é obrigatória'),
        address: zod_1.z.string().min(1, 'Endereço é obrigatório'),
        phone: zod_1.z.string().min(1, 'Telefone é obrigatório'),
        email: zod_1.z.string().email('Email inválido'),
    }),
    partner2: zod_1.z.object({
        name: zod_1.z.string().min(3),
        cpf: zod_1.z.string().regex(/^\d{11}$/, 'CPF inválido'),
        rg: zod_1.z.string().min(1, 'RG é obrigatório'),
        birthDate: zod_1.z.date(),
        nationality: zod_1.z.string().min(1, 'Nacionalidade é obrigatória'),
        civilStatus: zod_1.z.string().min(1, 'Estado civil é obrigatório'),
        profession: zod_1.z.string().min(1, 'Profissão é obrigatória'),
        address: zod_1.z.string().min(1, 'Endereço é obrigatório'),
        phone: zod_1.z.string().min(1, 'Telefone é obrigatório'),
        email: zod_1.z.string().email('Email inválido'),
    }),
});
