export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'employee' | 'admin';
  createdAt: Date;
};

export type CivilUnion = {
  id: string;
  partnerId1: string;
  partnerId2: string;
  startDate: Date;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  approvedBy?: string;
  rejectionReason?: string;
};

export type Partner = {
  id: string;
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
};