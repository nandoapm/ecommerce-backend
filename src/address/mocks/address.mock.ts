import { cityMock } from '../../city/mocks/city.mock';
import { userEntityMock } from '../../user/mocks/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  zipcode: '43253252',
  cityId: cityMock.id,
  complement: 'llkdfja',
  createdAt: new Date(),
  id: 57546,
  number: '654',
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
