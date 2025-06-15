import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name không được để trống' })
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty({ message: 'Password không được để trống' })
    password: string;

    phone?: string;

    address?: string;

    image?: string;

    role?: string;

    accountType?: string;

    isActive?: string;

    codeId?: string;

    codeExpired: Date;
}
