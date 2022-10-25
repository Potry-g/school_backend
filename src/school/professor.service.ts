import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProfessor } from './dto/create-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}

  async createProfessor(dto: CreateProfessor) {
    return await this.prisma.professor.create({
      data: {
        id: dto.id,
        name: dto.name,
        surname: dto.surname,
        schoolId: dto.schoolId,
        empathy: dto.empathy,
        gender: dto.gender,
        knowledge: dto.knowledge,
        rating: dto.rating,
        strictness: dto.strictness,
        createdAt: dto.createdAt,
      },
    });
  }
  async createProfessors(dto: CreateProfessor[]) {
    try {
      const professors = dto.map(async (prof) => {
        await this.createProfessor(prof);
      });
      return { msg: 'Data added successfully' };
    } catch (error) {
      throw error;
    }
  }
  async readProfessors(id: number) {
    const professors = await this.prisma.professor.findMany({
      where: {
        schoolId: id,
      },
    });
    return professors;
  }
  async readProfessor(schoolId: number, id: number) {
    const professor = await this.prisma.professor.findFirst({
      where: {
        schoolId: schoolId,
        id: id,
      },
    });
    return professor;
  }
}
