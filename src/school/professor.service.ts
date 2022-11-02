import { Injectable } from '@nestjs/common';
import { Professor } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProfessor } from './dto/create-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}

  async createProfessor(dto: CreateProfessor): Promise<Professor> {
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
  async createProfessors(dto: CreateProfessor[]): Promise<Professor[]> {
    const professors: Professor[] = await this.createProfrofessorsFunc(dto);
    console.log();
    return professors;
  }
  async readProfessors(id: number): Promise<Professor[]> {
    const professors: Professor[] = await this.prisma.professor.findMany({
      where: {
        schoolId: id,
      },
    });
    return professors;
  }
  async readProfessor(schoolId: number, id: number): Promise<Professor> {
    const professor: Professor = await this.prisma.professor.findFirst({
      where: {
        schoolId: schoolId,
        id: id,
      },
    });
    return professor;
  }

  async createProfrofessorsFunc(dto: CreateProfessor[]): Promise<Professor[]> {
    let professors: Professor[] = [];
    for (let i = 0; i < dto.length; i++) {
      professors.push(await this.createProfessor(dto[i]));
    }
    return professors;
  }
}
