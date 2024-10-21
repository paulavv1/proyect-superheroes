import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Hacemos el módulo global para no tener que importarlo en cada módulo
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Exporta el PrismaService para que otros módulos puedan usarlo
})
export class PrismaModule {}
