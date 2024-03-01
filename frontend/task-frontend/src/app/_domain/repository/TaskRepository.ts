import { Task } from "../types/Task";

export interface TaskRepository {
    getTask(id: number): Task
    getSubtasks(id: number): Task[]
}