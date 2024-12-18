"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { CivilUnionFormData } from '@/lib/types/auth';
import { PartnerForm } from './partner-form';
import { WitnessForm } from './witness-form';
import { DatePicker } from '@/components/ui/date-picker';

export function CivilUnionForm() {
  const [formData, setFormData] = useState<CivilUnionFormData>({
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

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement civil union registration logic
    toast({
      title: "Registro em desenvolvimento",
      description: "Funcionalidade será implementada em breve.",
    });
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <Card className="p-8">
        <h1 className="text-2xl font-bold text-center mb-6">Registro de União Estável</h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Data de Início da União</h2>
            <DatePicker
              date={formData.startDate}
              onChange={(date) => setFormData(prev => ({ ...prev, startDate: date || new Date() }))}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Primeiro Parceiro</h2>
            <PartnerForm
              data={formData.partner1}
              onChange={(data) => setFormData(prev => ({ ...prev, partner1: data }))}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Segundo Parceiro</h2>
            <PartnerForm
              data={formData.partner2}
              onChange={(data) => setFormData(prev => ({ ...prev, partner2: data }))}
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Testemunhas</h2>
            {formData.witnesses.map((witness, index) => (
              <WitnessForm
                key={index}
                data={witness}
                onChange={(data) => {
                  const newWitnesses = [...formData.witnesses];
                  newWitnesses[index] = data;
                  setFormData(prev => ({ ...prev, witnesses: newWitnesses }));
                }}
              />
            ))}
            {formData.witnesses.length < 2 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setFormData(prev => ({
                  ...prev,
                  witnesses: [...prev.witnesses, { name: '', cpf: '', rg: '', phone: '' }]
                }))}
              >
                Adicionar Testemunha
              </Button>
            )}
          </div>

          <Button type="submit" className="w-full">
            Registrar União Estável
          </Button>
        </form>
      </Card>
    </div>
  );
}