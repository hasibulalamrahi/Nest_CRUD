/* eslint-disable prettier/prettier */
import { Controller,Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('api/auth')
export class AuthController{
    constructor(private authService:AuthService){
        
    }
    @Post('signUp')
        singUp(){
            return "Hello from signup"
        }

    @Post('signIn')
    signIn(){
        return "Hello from signIn"
    }
}