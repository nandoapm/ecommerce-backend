/* eslint-disable prettier/prettier */
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsString()
  number: string;

  @IsString()
  zipcode: string;

  @IsInt()
  cityId: number;
}
