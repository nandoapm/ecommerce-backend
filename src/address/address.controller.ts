import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserId } from '../decorators/user-id.decorator';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
//import { ReturnAddressDto } from './dtos/returnAddress.dto';
import { AddressEntity } from './entities/address.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

//This @Roles is using to validate user role
@Roles(UserType.User) //UserType.Admin, UserType.Root
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }

  // @Get()
  // async findAddressByUserId(
  //   @UserId() userId: number,
  // ): Promise<ReturnAddressDto[]> {
  //   return (await this.addressService.findAddressByUserId(userId)).map(
  //     (address) => new ReturnAddressDto(address),
  //   );
  // }
}
