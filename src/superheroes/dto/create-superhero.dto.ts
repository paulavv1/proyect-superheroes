import { ApiProperty } from "@nestjs/swagger";

export class CreateSuperheroDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  power: string;

  @ApiProperty()
  marital_status: string;

  @ApiProperty()
  ranking: number;
}
