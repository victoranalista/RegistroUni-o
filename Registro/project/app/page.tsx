import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Shield, Users, FileText } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Sistema de União Estável</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Registre e gerencie uniões estáveis de forma simples e segura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Registro de União</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Registre sua união estável de forma rápida e segura
              </p>
              <Link href="/auth/register" passHref>
                <Button>Começar Registro</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <FileText className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Consulta de Status</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Acompanhe o status do seu processo
              </p>
              <Link href="/auth/login" passHref>
                <Button>Consultar Status</Button>
              </Link>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 mb-4 text-primary" />
              <h2 className="text-xl font-semibold mb-2">Área Restrita</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Acesso para funcionários e administradores
              </p>
              <Link href="/auth/login" passHref>
                <Button variant="outline">Fazer Login</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}