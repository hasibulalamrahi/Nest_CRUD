/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{
                    url: 'postgresql://postgres:bs23@localhost:5432/nest_crud?schema=public'
                },
            },
        });
    }
}
