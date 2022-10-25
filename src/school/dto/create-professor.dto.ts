import { Prisma } from '@prisma/client';

export interface CreateProfessor {
  id: number;
  name: string;
  surname: string;
  schoolId: number;
  empathy: number;
  gender: string;
  knowledge: number;
  rating: number;
  strictness: number;
  createdAt?: string;
}
