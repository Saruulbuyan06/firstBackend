import { Controller, Get, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "src/models/createUser.dto";
import { AuthService } from "./auth.service";
@Controller()
export class AuthController {
  constructor(private readonly AuthService: AuthService) { }

  @Post('signUp')
  signUp(@Body() createUserDto: CreateUserDto) {
    console.log('dfgvdg');
    return this.AuthService.signUp(createUserDto);
  }

  @Post('signIn')
  signInUser() { }

}