"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { WitnessFormData } from '@/lib/types/auth';

interface WitnessFormProps {
  data: WitnessFormData;
  onChange: (data: WitnessFormData) => void;
}

export function WitnessForm({ data, onChange }: WitnessFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="name">Nome Completo</Label>
        <Input
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cpf">CPF</Label>
        <Input
          id="cpf"
          name="cpf"
          value={data.cpf}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rg">RG</Label>
        <Input
          id="rg"
          name="rg"
          value={data.rg}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}