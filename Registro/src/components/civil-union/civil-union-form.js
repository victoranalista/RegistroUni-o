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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CivilUnionForm = CivilUnionForm;
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const card_1 = require("@/components/ui/card");
const use_toast_1 = require("@/components/ui/use-toast");
const partner_form_1 = require("./partner-form");
const witness_form_1 = require("./witness-form");
const date_picker_1 = require("@/components/ui/date-picker");
function CivilUnionForm() {
    const [formData, setFormData] = (0, react_1.useState)({
        startDate: new Date(),
        partner1: {
            name: '',
            cpf: '',
            rg: '',
            birthDate: new Date(),
            nationality: '',
            civilStatus: '',
            profession: '',
            address: '',
            phone: '',
            email: '',
        },
        partner2: {
            name: '',
            cpf: '',
            rg: '',
            birthDate: new Date(),
            nationality: '',
            civilStatus: '',
            profession: '',
            address: '',
            phone: '',
            email: '',
        },
        witnesses: [{
                name: '',
                cpf: '',
                rg: '',
                phone: '',
            }],
    });
    const { toast } = (0, use_toast_1.useToast)();
    const handleSubmit = (e) => __awaiter(this, void 0, void 0, function* () {
        e.preventDefault();
        // TODO: Implement civil union registration logic
        toast({
            title: "Registro em desenvolvimento",
            description: "Funcionalidade será implementada em breve.",
        });
    });
    return (<div className="container mx-auto max-w-4xl">
      <card_1.Card className="p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Registro de União Estável</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Data de Início da União</h2>
            <date_picker_1.DatePicker date={formData.startDate} onChange={(date) => setFormData(prev => (Object.assign(Object.assign({}, prev), { startDate: date || new Date() })))}/>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Primeiro Parceiro</h2>
            <partner_form_1.PartnerForm data={formData.partner1} onChange={(data) => setFormData(prev => (Object.assign(Object.assign({}, prev), { partner1: data })))}/>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Segundo Parceiro</h2>
            <partner_form_1.PartnerForm data={formData.partner2} onChange={(data) => setFormData(prev => (Object.assign(Object.assign({}, prev), { partner2: data })))}/>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Testemunhas</h2>
            {formData.witnesses.map((witness, index) => (<witness_form_1.WitnessForm key={index} data={witness} onChange={(data) => {
                const newWitnesses = [...formData.witnesses];
                newWitnesses[index] = data;
                setFormData(prev => (Object.assign(Object.assign({}, prev), { witnesses: newWitnesses })));
            }}/>))}
            {formData.witnesses.length < 2 && (<button_1.Button type="button" variant="outline" onClick={() => setFormData(prev => (Object.assign(Object.assign({}, prev), { witnesses: [...prev.witnesses, { name: '', cpf: '', rg: '', phone: '' }] })))}>
                Adicionar Testemunha
              </button_1.Button>)}
          </div>

          <button_1.Button type="submit" className="w-full">
            Registrar União Estável
          </button_1.Button>
        </form>
      </card_1.Card>
    </div>);
}
