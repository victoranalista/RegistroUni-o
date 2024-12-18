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
exports.RegisterForm = RegisterForm;
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const use_toast_1 = require("@/components/ui/use-toast");
const link_1 = __importDefault(require("next/link"));
const navigation_1 = require("next/navigation");
const auth_1 = require("@/lib/validations/auth");
function RegisterForm() {
    const [formData, setFormData] = (0, react_1.useState)({
        name: '',
        email: '',
        cpf: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = (0, react_1.useState)({});
    const { toast } = (0, use_toast_1.useToast)();
    const router = (0, navigation_1.useRouter)();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [name]: value })));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => (Object.assign(Object.assign({}, prev), { [name]: '' })));
        }
    };
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        const validationErrors = (0, auth_1.validateRegisterForm)(formData);
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
        }
        catch (error) {
            toast({
                title: "Erro no registro",
                description: "Ocorreu um erro ao tentar registrar. Tente novamente.",
                variant: "destructive",
            });
        }
    });
    return (<card_1.Card className="w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Criar Conta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label_1.Label htmlFor="name">Nome Completo</label_1.Label>
          <input_1.Input id="name" name="name" value={formData.name} onChange={handleChange} required/>
          {errors.name && (<p className="text-sm text-red-500">{errors.name}</p>)}
        </div>

        <div className="space-y-2">
          <label_1.Label htmlFor="email">Email</label_1.Label>
          <input_1.Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required/>
          {errors.email && (<p className="text-sm text-red-500">{errors.email}</p>)}
        </div>

        <div className="space-y-2">
          <label_1.Label htmlFor="cpf">CPF</label_1.Label>
          <input_1.Input id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required/>
          {errors.cpf && (<p className="text-sm text-red-500">{errors.cpf}</p>)}
        </div>

        <div className="space-y-2">
          <label_1.Label htmlFor="password">Senha</label_1.Label>
          <input_1.Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required/>
          {errors.password && (<p className="text-sm text-red-500">{errors.password}</p>)}
        </div>

        <div className="space-y-2">
          <label_1.Label htmlFor="confirmPassword">Confirmar Senha</label_1.Label>
          <input_1.Input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required/>
          {errors.confirmPassword && (<p className="text-sm text-red-500">{errors.confirmPassword}</p>)}
        </div>

        <button_1.Button type="submit" className="w-full">
          Registrar
        </button_1.Button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Já tem uma conta?{' '}
          <link_1.default href="/auth/login" className="text-primary hover:underline">
            Faça login
          </link_1.default>
        </p>
      </div>
    </card_1.Card>);
}
