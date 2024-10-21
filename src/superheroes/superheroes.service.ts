import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SuperheroesService {
  constructor(private readonly prisma:PrismaService) {}//c
  create(createSuperheroDto: CreateSuperheroDto) {
    return 'This action adds a new superhero';
  }

  findTopTenSingle() {
    return this.prisma.superheroe.findMany({
      where: {
        ranking: {
          lte:10 //Filtra a los superheroes con ranking 10 o menor
        },
        marital_status:'single'//Filtrar a los que tienen el estado civil soltero
      },
      orderBy:{
        ranking:'asc' //Ordena de forma ascendente
      }
    }) ;
  }

  findOne(id: number) {
    return this.prisma.superheroe.findUnique({
      where:{id}
    });
  }

  update(id: number, updateSuperheroDto: UpdateSuperheroDto) {
    return `This action updates a #${id} superhero`;
  }

  remove(id: number) {
    return this.prisma.superheroe.delete({
      where:{id}
    });
  }
}
