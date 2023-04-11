/* eslint-disable prettier/prettier */
import { ReturnCityDto } from '../../city/dtos/returnCity.dto';
import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  //id: number;
  complement: string;
  number: string;
  zipcode: string;
  city?: ReturnCityDto;

  constructor(address: AddressEntity) {
    //this.id = address.id;
    this.complement = address.complement;
    this.number = address.number;
    this.zipcode = address.zipcode;
    this.city = address.city && new ReturnCityDto(address.city);
  }
}
