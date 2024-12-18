"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerForm = PartnerForm;
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
const date_picker_1 = require("@/components/ui/date-picker");
function PartnerForm({ data, onChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(Object.assign(Object.assign({}, data), { [name]: value }));
    };
    return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label_1.Label htmlFor="name">Nome Completo</label_1.Label>
        <input_1.Input id="name" name="name" value={data.name} onChange={handleChange} required/>
      </div>

      <div className="space-y-2">
        <label_1.Label htmlFor="cpf">CPF</label_1.Label>
        <input_1.Input id="cpf" name="cpf" value={data.cpf} onChange={handleChange} required/>
      </div>

      <div className="space-y-2">
        <label_1.Label htmlFor="rg">RG</label_1.Label>
        <input_1.Input id="rg" name="rg" value={data.rg} onChange={handleChange} required/>
      </div>

      <div className="space-y-2">
        <label_1.Label>Data de Nascimento</label_1.Label>
        <date_picker_1.DatePicker date={data.birthDate} onChange={(date) => onChange(Object.assign(Object.assign({}, data), { birthDate: date || new Date() }))}/>
      </div>

      <div className="space-y-2">
        <label_1.Label htmlFor="nationality">Nacionalidade</label_1.Label>
        <input_1.Input id="nationality" name="nationality" value={data.nationality} onChange={handleChange} required/>
      </div>

      <div className="space-y-2">
        <label_1.Label htmlFor="civilStatus">Estado Civil</label_1.Label>
        <input_1.Input id="civilStatus" name="civilStatus" value={data.civilStatus} onChange={handleChange} required/>
      </div>

      <div className="space-y-2">
        <label_1.Label htmlFor="profession">Profissão</label_1.Label>
        <input_1.Input id="profession" name="profession" value={data.profession} onChange={handleChange} required/>
      </div>

      <div className="space-y-2">
        <label_1.Label htmlFor="phone">Telefone</label_1.Label>
        <input_1.Input id="phone" name="phone" value={data.phone} onChange={handleChange} required/>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label_1.Label htmlFor="address">Endereço Completo</label_1.Label>
        <input_1.Input id="address" name="address" value={data.address} onChange={handleChange} required/>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label_1.Label htmlFor="email">Email</label_1.Label>
        <input_1.Input id="email" name="email" type="email" value={data.email} onChange={handleChange} required/>
      </div>
    </div>);
}
