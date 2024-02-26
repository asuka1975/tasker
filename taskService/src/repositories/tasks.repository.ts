import { PrismaClient, Task } from "../generated/prisma/client";

export class TasksRepository {
    private readonly client: PrismaClient;

    constructor(client: PrismaClient) {
        this.client = client;
    }

    async getAllTasks(): Promise<Task[]> {
        return await this.client.task.findMany();
    }

    async getTaskById(id: number): Promise<Task | null> {
        return await this.client.task.findFirst({
            where: {
                id: id
            }
        })
    }

    async getChildrenByParentId(id: number): Promise<Task[]> {
        return await this.client.task.findMany({
            where: {
                parentId: id
            }
        })
    }
};