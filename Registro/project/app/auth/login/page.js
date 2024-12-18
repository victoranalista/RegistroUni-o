"use strict";
"use client";
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
exports.default = LoginPage;
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const use_toast_1 = require("@/components/ui/use-toast");
const link_1 = __importDefault(require("next/link"));
function LoginPage() {
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const { toast } = (0, use_toast_1.useToast)();
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        // TODO: Implement login logic
        toast({
            title: "Login em desenvolvimento",
            description: "Funcionalidade será implementada em breve.",
        });
    });
    return (<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <card_1.Card className="w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label_1.Label htmlFor="email">Email</label_1.Label>
            <input_1.Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="space-y-2">
            <label_1.Label htmlFor="password">Senha</label_1.Label>
            <input_1.Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <button_1.Button type="submit" className="w-full">
            Entrar
          </button_1.Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Não tem uma conta?{' '}
            <link_1.default href="/auth/register" className="text-primary hover:underline">
              Registre-se
            </link_1.default>
          </p>
        </div>
      </card_1.Card>
    </div>);
}
