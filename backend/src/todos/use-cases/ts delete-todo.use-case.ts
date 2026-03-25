import { Inject, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { deletetodoRepository } from "../repository/ts delete-todo.repository";


@Injectable()
export class DeleteTodoUseCase {
    findtodobyidrepository: any;
    deletetodorepository: any;
    constructor(
        private readonly repository: deletetodoRepository, // Ajuste o nome do repositório se necessário
        private readonly logger: Logger,
    ) { }

    async execute( id: string) {
        try {
            this.logger.log('deleting toDO...');
            const todo = await this.findtodobyidrepository.findbyid(id);
            if(!todo){
                throw new NotFoundException('todo not found');
            }

            await this.deletetodorepository.delete(id);
            this.logger.log(`Deleting toDo with id: ${id}...`);
            await this.repository.delete(id);
            this.logger.log('ToDo deleted successfully');
            return { success: true };
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to delete toDo');
        }
    }
}