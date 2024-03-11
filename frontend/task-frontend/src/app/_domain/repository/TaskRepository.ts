import { Task } from "../types/Task";

export interface TaskRepository {
    getTask(id: number): Task | undefined
    getAllTasks(): Task[]
    getRootTasks(id: number): Task[]
    getSubtasks(id: number): Task[]
    addTask(task: { title: string; description: string; priority: number; limitAt: Date; }, parentId: number | null): Task
    updateTask(task: { id: number, title: string | undefined; description: string | undefined; priority: number | undefined; limitAt: Date | undefined }, parentId: number | undefined): Task | undefined
    deleteTask(id: number): Task | undefined
}