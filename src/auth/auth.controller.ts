import {
  Controller,
  HttpStatus,
  HttpCode,
  Post,
  NotImplementedException,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

type AuthInput = {
  username: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private authServece: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: AuthInput) {
    return this.authServece.authenticate(input);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getUserInfo(@Request() request) {
    return request.user;
  }
}
