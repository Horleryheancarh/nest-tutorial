import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from './Address.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  email: string;

  @IsNumberString()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressDto;
}
