/* eslint-disable prettier/prettier */
import { Body,Controller,Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {SignUpDto} from './auth-model/index'
@Controller('api/auth')
export class AuthController{
    constructor(private authService:AuthService){
        
    }
    @Post('signUp')
        singUp(@Body() usersignup:SignUpDto){
            return this.authService.singUp(usersignup)
        }

    @Post('signIn')
    signIn(){
        return this.authService.singIn()
    }
}