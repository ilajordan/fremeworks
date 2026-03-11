import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "../dto/create-todo.dto";
import { PrismaService } from "src/shared/databases/prisma.database";


@Injectable()
export class deletetodoRepository {
    constructor(private readonly prisma: PrismaService) {}

    async delete(id:String) {
        return await this.prisma.todo.delete
        ({where: {id}});
    }
}