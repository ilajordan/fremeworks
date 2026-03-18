import { Injectable, Logger } from "@nestjs/common";
import { createTodoRepository } from "../repository";
import { CreateTodoDto } from "../dto/create-todo.dto";

@Injectable()
export class CreateTodoUseCase{
    constructor(
        private readonly CreateTodoRepository: createTodoRepository,
        private readonly logger: Logger,

    ){}

    async execute(data: CreateTodoDto) {
        try {
            this.logger.log('creating toDo...');
            const todo = await this.CreateTodoRepository.create(data);
            this.logger.log('toDo created sucessfully');
            return todo;
        }

            catch (error) {
                this.logger.error(error);
                throw new error('failed to create toDo');
            } 
    }
}