import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { IsEmail, IsNumber, IsPhoneNumber, MinLength } from 'class-validator';

export class SandwichPO {
  @MinLength(5)
  name: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsNumber()
  qty: string;
}

export const resolver = classValidatorResolver(SandwichPO);
