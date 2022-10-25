import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProfessorService } from './professor.service';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  imports: [],
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService, ProfessorService],
})
export class SchoolModule {}
