import { Injectable } from '@nestjs/common';
import { School } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateSchool } from './dto/create-school.dto';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async createSchool(dto: CreateSchool): Promise<School> {
    const school = await this.prisma.school.create({
      data: {
        id: dto.id,
        image: dto.image,
        name: dto.name,
        address: dto.address,
        city: dto.city,
        createdAt: dto.createdAt,
      },
    });
    return school;
  }

  async readSchool(id: number): Promise<School> {
    const school = await this.prisma.school.findUnique({
      where: {
        id: id,
      },
    });
    return school;
  }

  async readSchools(): Promise<School[]> {
    const schools = await this.prisma.school.findMany();
    return schools;
  }
}
