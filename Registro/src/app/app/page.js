"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const link_1 = __importDefault(require("next/link"));
const lucide_react_1 = require("lucide-react");
function Home() {
    return (<main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Sistema de União Estável</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Registre e gerencie uniões estáveis de forma simples e segura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <card_1.Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <lucide_react_1.Users className="w-12 h-12 mb-4 text-primary"/>
              <h2 className="text-xl font-semibold mb-2">Registro de União</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Registre sua união estável de forma rápida e segura
              </p>
              <link_1.default href="/auth/register" passHref>
                <button_1.Button>Começar Registro</button_1.Button>
              </link_1.default>
            </div>
          </card_1.Card>

          <card_1.Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <lucide_react_1.FileText className="w-12 h-12 mb-4 text-primary"/>
              <h2 className="text-xl font-semibold mb-2">Consulta de Status</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Acompanhe o status do seu processo
              </p>
              <link_1.default href="/auth/login" passHref>
                <button_1.Button>Consultar Status</button_1.Button>
              </link_1.default>
            </div>
          </card_1.Card>

          <card_1.Card className="p-6">
            <div className="flex flex-col items-center text-center">
              <lucide_react_1.Shield className="w-12 h-12 mb-4 text-primary"/>
              <h2 className="text-xl font-semibold mb-2">Área Restrita</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Acesso para funcionários e administradores
              </p>
              <link_1.default href="/auth/login" passHref>
                <button_1.Button variant="outline">Fazer Login</button_1.Button>
              </link_1.default>
            </div>
          </card_1.Card>
        </div>
      </div>
    </main>);
}
