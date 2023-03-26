/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'
@Injectable()
export class AuthService{
    constructor (private prisma: PrismaService){}
   async  singUp(usersignup){
        try{
            const hash = await argon.hash(usersignup.password)
            const users = await this.prisma.users.create({
                data:{
                    email: usersignup.email,
                    hash
                }
            })
        if (users) return {res: "Thanks for the signup"}
        }catch(err){
            console.log(err)
            return {res: "an error occured please try again later"}
        }
    }
    singIn(){
        return "Hello from signin"
    }
}