"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RegisterFormData } from '@/lib/types/auth';
import { validateRegisterForm } from '@/lib/validations/auth';

export function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const { toast } = useToast();
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof RegisterFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateRegisterForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // TODO: Implement registration logic
      toast({
        title: "Registro em desenvolvimento",
        description: "Funcionalidade será implementada em breve.",
      });
    } catch (error) {
      toast({
        title: "Erro no registro",
        description: "Ocorreu um erro ao tentar registrar. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Criar Conta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome Completo</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
          {errors.cpf && (
            <p className="text-sm text-red-500">{errors.cpf}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar Senha</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Registrar
        </Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Já tem uma conta?{' '}
          <Link href="/auth/login" className="text-primary hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </Card>
  );
}