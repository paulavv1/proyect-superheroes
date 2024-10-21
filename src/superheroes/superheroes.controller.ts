import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { UpdateSuperheroDto } from './dto/update-superhero.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('superheroes')
@ApiTags('Superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.create(createSuperheroDto);
  }

  @Get('ToptenSingle')
  findAll() {
    return this.superheroesService.findTopTenSingle();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superheroesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuperheroDto: UpdateSuperheroDto) {
    return this.superheroesService.update(+id, updateSuperheroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.superheroesService.remove(+id);
  }
}
