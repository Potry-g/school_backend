import { Module } from '@nestjs/common';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [SchoolModule],
  providers: [],
})
export class AppModule {}
