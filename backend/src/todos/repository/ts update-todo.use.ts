import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-todo.dto";

@Injectable()
export class updatetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async update(id:string, data:UpdateTodoDto ) {
        return await this.prisma.todo.update
        ({where: {id}, data});
    }
}