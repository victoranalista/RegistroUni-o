"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DatePicker } from '@/components/ui/date-picker';
import { PartnerFormData } from '@/lib/types/auth';

interface PartnerFormProps {
  data: PartnerFormData;
  onChange: (data: PartnerFormData) => void;
}

export function PartnerForm({ data, onChange }: PartnerFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <Label>Data de Nascimento</Label>
        <DatePicker
          date={data.birthDate}
          onChange={(date) => onChange({ ...data, birthDate: date || new Date() })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="nationality">Nacionalidade</Label>
        <Input
          id="nationality"
          name="nationality"
          value={data.nationality}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="civilStatus">Estado Civil</Label>
        <Input
          id="civilStatus"
          name="civilStatus"
          value={data.civilStatus}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="profession">Profissão</Label>
        <Input
          id="profession"
          name="profession"
          value={data.profession}
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

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="address">Endereço Completo</Label>
        <Input
          id="address"
          name="address"
          value={data.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}