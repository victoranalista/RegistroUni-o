export interface RegisterFormData {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

export interface CivilUnionFormData {
  startDate: Date;
  partner1: PartnerFormData;
  partner2: PartnerFormData;
  witnesses: WitnessFormData[];
}

export interface PartnerFormData {
  name: string;
  cpf: string;
  rg: string;
  birthDate: Date;
  nationality: string;
  civilStatus: string;
  profession: string;
  address: string;
  phone: string;
  email: string;
}

export interface WitnessFormData {
  name: string;
  cpf: string;
  rg: string;
  phone: string;
}