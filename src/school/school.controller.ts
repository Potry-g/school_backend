import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CreateSchool } from './dto/create-school.dto';
import { SchoolService } from './school.service';
import { CreateProfessor } from './dto/create-professor.dto';
import { ProfessorService } from './professor.service';

@Controller('school')
export class SchoolController {
  constructor(
    private schoolService: SchoolService,
    private professorService: ProfessorService,
  ) {}

  @Post('professor')
  createProfessor(@Body() dto: CreateProfessor) {
    return this.professorService.createProfessor(dto);
  }

  @Post('professors')
  createProfessors(@Body() dto: CreateProfessor[]) {
    return this.professorService.createProfessors(dto);
  }

  @Get(':id/professor')
  async readProfessors(@Param('id') id: string) {
    return this.professorService.readProfessors(Number(id));
  }

  @Get(':id/professor/:prof')
  async readProfessor(
    @Param('id') schoolId: string,
    @Param('prof') id: string,
  ) {
    return this.professorService.readProfessor(Number(schoolId), Number(id));
  }

  @Post()
  async createSchool(@Body() dto: CreateSchool) {
    return this.schoolService.createSchool(dto);
  }

  @Get(':id')
  async getSchool(@Param('id') id: string) {
    return this.schoolService.readSchool(Number(id));
  }
  @Get()
  async getSchools() {
    return this.schoolService.readSchools();
  }
}
