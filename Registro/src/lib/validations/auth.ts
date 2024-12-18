import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha deve ter pelo menos 8 caracteres'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não conferem",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(1, 'Senha é obrigatória'),
});

export const civilUnionSchema = z.object({
  startDate: z.date(),
  partner1: z.object({
    name: z.string().min(3),
    cpf: z.string().regex(/^\d{11}$/, 'CPF inválido'),
    rg: z.string().min(1, 'RG é obrigatório'),
    birthDate: z.date(),
    nationality: z.string().min(1, 'Nacionalidade é obrigatória'),
    civilStatus: z.string().min(1, 'Estado civil é obrigatório'),
    profession: z.string().min(1, 'Profissão é obrigatória'),
    address: z.string().min(1, 'Endereço é obrigatório'),
    phone: z.string().min(1, 'Telefone é obrigatório'),
    email: z.string().email('Email inválido'),
  }),
  partner2: z.object({
    name: z.string().min(3),
    cpf: z.string().regex(/^\d{11}$/, 'CPF inválido'),
    rg: z.string().min(1, 'RG é obrigatório'),
    birthDate: z.date(),
    nationality: z.string().min(1, 'Nacionalidade é obrigatória'),
    civilStatus: z.string().min(1, 'Estado civil é obrigatório'),
    profession: z.string().min(1, 'Profissão é obrigatória'),
    address: z.string().min(1, 'Endereço é obrigatório'),
    phone: z.string().min(1, 'Telefone é obrigatório'),
    email: z.string().email('Email inválido'),
  }),
});