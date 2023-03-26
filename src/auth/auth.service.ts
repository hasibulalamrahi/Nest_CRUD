/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
// import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService{
    constructor (private prisma: PrismaService){}
   async  singUp(usersignup){
        try{
            // const hash = await bcrypt.hash(usersignup.password,10)
            const users = await this.prisma.users.create({
                data:{
                    email: usersignup.email,
                    hash: usersignup.password
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