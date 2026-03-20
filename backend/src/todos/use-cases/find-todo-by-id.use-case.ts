import { Inject, Injectable, Logger } from "@nestjs/common";
import { createTodoRepository } from "../repository";



@Injectable()
export class FindAllTodosUseCase {
    constructor(
        private readonly repository: createTodoRepository,
        private readonly logger: Logger,
    ) { }

    async execute() {
        try {
            this.logger.log('Fetching all toDos...');
            const todos = await this.repository.findAll();
            return todos;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to fetch toDos');
        }
    }
}
