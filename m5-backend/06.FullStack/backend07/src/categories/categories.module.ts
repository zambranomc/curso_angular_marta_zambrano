import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Category } from './categories.model';

@Module({
  imports:[TypeOrmModule.forFeature([Category])], //Importo
  controllers: [CategoriesController],
  providers: [CategoriesService],
  exports: [CategoriesService] //exporto el servicio categories service para utilizarlo en books
})
export class CategoriesModule {



}
