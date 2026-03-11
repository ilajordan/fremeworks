import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";

@Injectable()
export class updatetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update( data:updatetodoRepository , id:String) {
        return await this.prisma.todo.update
        ({where: {id}, data});
    }
}