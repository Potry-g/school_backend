import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSchool } from './dto/create-school.dto';

@Injectable()
export class SchoolService {
  constructor(private prisma: PrismaService) {}

  async createSchool(dto: CreateSchool) {
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

  async readSchool(id: number) {
    const school = this.prisma.school.findUnique({
      where: {
        id: id,
      },
    });
    return school;
  }

  async readSchools() {
    const schools = this.prisma.school.findMany();
    return schools;
  }
}
