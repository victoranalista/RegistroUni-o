"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WitnessForm = WitnessForm;
const input_1 = require("@/components/ui/input");
const label_1 = require("@/components/ui/label");
function WitnessForm({ data, onChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange(Object.assign(Object.assign({}, data), { [name]: value }));
    };
    return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
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
        <label_1.Label htmlFor="phone">Telefone</label_1.Label>
        <input_1.Input id="phone" name="phone" value={data.phone} onChange={handleChange} required/>
      </div>
    </div>);
}
