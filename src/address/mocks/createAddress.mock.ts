import { cityMock } from '../../city/mocks/city.mock';
import { CreateAddressDto } from '../dtos/createAddress.dto';
import { addressMock } from './address.mock';

export const createAddressMock: CreateAddressDto = {
  zipcode: addressMock.zipcode,
  cityId: cityMock.id,
  complement: addressMock.complement,
  number: addressMock.number,
};
