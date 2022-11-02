import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateSchool } from './dto/create-school.dto';
import { SchoolService } from './school.service';
import { CreateProfessor } from './dto/create-professor.dto';
import { ProfessorService } from './professor.service';
import { Professor, School } from '@prisma/client';

@Controller('school')
export class SchoolController {
  constructor(
    private schoolService: SchoolService,
    private professorService: ProfessorService,
  ) {}

  @Post('professor')
  createProfessor(@Body() dto: CreateProfessor): Promise<Professor> {
    return this.professorService.createProfessor(dto);
  }

  @Post('professors')
  async createProfessors(@Body() dto: CreateProfessor[]): Promise<Professor[]> {
    return await this.professorService.createProfessors(dto);
  }

  @Get(':id/professor')
  async readProfessors(@Param('id') id: string): Promise<Professor[]> {
    return this.professorService.readProfessors(Number(id));
  }

  @Get(':id/professor/:prof')
  async readProfessor(
    @Param('id') schoolId: string,
    @Param('prof') id: string,
  ): Promise<Professor> {
    return this.professorService.readProfessor(Number(schoolId), Number(id));
  }

  @Post()
  async createSchool(@Body() dto: CreateSchool): Promise<School> {
    return this.schoolService.createSchool(dto);
  }

  @Get(':id')
  async getSchool(@Param('id') id: string): Promise<School> {
    return this.schoolService.readSchool(Number(id));
  }
  @Get()
  async getSchools(): Promise<School[]> {
    return this.schoolService.readSchools();
  }
}
