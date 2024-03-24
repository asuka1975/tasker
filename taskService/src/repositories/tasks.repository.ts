import { PrismaClient, Task } from "../generated/prisma/client";
import { TaskInput, TaskUpdateInput } from "../schema/taskSchema";

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

    async getRootTasks(): Promise<Task[]> {
        return await this.client.task.findMany({
            where: {
                parentId: null
            }
        })
    }

    async createTask(task: TaskInput): Promise<Task> {
        return await this.client.task.create({
            data: {
                title: task.title,
                description: task.description,
                priority: task.priority,
                limitAt: task.limitAt
            }
        });
    }

    async createTaskToParent(task: TaskInput, parentId: number): Promise<Task> {
        return await this.client.task.create({
            data: {
                title: task.title,
                description: task.description,
                priority: task.priority,
                limitAt: task.limitAt,
                parentId: parentId
            }
        });
    }

    async createTasks(tasks: TaskInput[]): Promise<number> {
        return await this.client.task.createMany({
            data: tasks.map(task => {
                return {
                    title: task.title,
                    description: task.description,
                    priority: task.priority,
                    limitAt: task.limitAt
                }
            })
        }).then(payload => payload.count);
    }

    async updateTask(id: number, task: TaskUpdateInput): Promise<Task> {
        console.log(id, task)
        return await this.client.task.update({
            where: {
                id: id
            },
            data: task
        });
    }

    async deleteTask(id: number): Promise<Task> {
        return await this.client.task.delete({
            where: {
                id: id
            }
        });
    }
};