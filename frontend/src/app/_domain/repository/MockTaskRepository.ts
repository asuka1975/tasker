import dayjs from "dayjs";
import { Task } from "../types/Task";
import { TaskRepository } from "./TaskRepository";

function getRandomInt(max: number) {
    return Math.round(Math.random() * max);
}

type TaskRecord = Task & { parentId: number | null }

export class MockTaskRepository implements TaskRepository {
    tasks: TaskRecord[]
    sequence: number;

    constructor() {
        this.tasks = [];
        this.sequence = 0;

        for(let i = 0; i < 10; i++) {
            const length = this.tasks.length - 1 < 0 ? 0 : this.tasks.length - 1;
            const parentId = getRandomInt(100) < 95 ? getRandomInt(length) : null;
            this.addTask(this.createTask(), parentId);
        }
    }

    createTask(): { title: string; description: string; priority: number; limitAt: Date } {
        const task = {
            title: `sample${getRandomInt(10)}`.repeat(getRandomInt(5) + 1),
            description: `description${getRandomInt(10) + 1}`,
            priority: getRandomInt(7),
            limitAt: dayjs(new Date()).add(getRandomInt(50) - 10, 'day').toDate(),
        }
        return task;
    }

    getTask(id: number): Task | undefined {
        return this.tasks.find(t => t.id === id);
    }
    getAllTasks(): Task[] {
        return this.tasks;
    }
    getRootTasks(): Task[] {
        return this.tasks.filter(t => t.parentId === null);
    }
    getSubtasks(id: number): Task[] {
        return this.tasks.filter(t => t.parentId === id);
    }
    addTask(task: { title: string; description: string; priority: number; limitAt: Date; }, parentId: number | null): Task {
        const taskRecord = {
            id: this.sequence,
            createdAt: new Date(),
            updatedAt: new Date(),
            completed: false,
            parentId,
            ...task
        };
        this.tasks.push(taskRecord);

        this.sequence++;

        return taskRecord;
    }
    updateTask(task: { id: number, title: string | undefined; description: string | undefined; priority: number | undefined; limitAt: Date | undefined }, parentId: number | undefined): Task | undefined {
        this.tasks = this.tasks
            .map(t => {
                if(t.id === task.id) {
                    if(!!task.title) {
                        t.title = task.title;
                    }
                    if(!!task.description) {
                        t.description = task.description;
                    }
                    if(!!task.priority) {
                        t.priority = task.priority;
                    }
                    if(!!task.limitAt) {
                        t.limitAt = task.limitAt;
                    }
                    if(!!parentId) {
                        t.parentId = parentId;
                    }
                    t.updatedAt = new Date();
                    return t;
                } else {
                    return t;
                }
            })

        return this.tasks.find(t => t.id === task.id);
    }
    deleteTask(id: number): Task | undefined {
        const record = this.tasks.find(t => t.id === id);

        this.tasks = this.tasks.filter(t => t.id !== id);

        return record;
    }
}


export const mockTaskRepository = new MockTaskRepository();