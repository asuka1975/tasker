import dayjs from "dayjs";
import { Task } from "../types/Task";
import { TaskRepository } from "./TaskRepository";

function getRandomInt(max: number) {
    return Math.round(Math.random() * max) + 1;
}

export class MockTaskRepository implements TaskRepository {
    getTask(id: number): Task {
        return {
            id: id,
            title: `sample${getRandomInt(10)}`.repeat(getRandomInt(5)),
            description: `description${getRandomInt(10)}`,
            priority: getRandomInt(7),
            createdAt: dayjs(new Date()).subtract(getRandomInt(100), 'day').toDate(),
            updatedAt: dayjs(new Date()).toDate(),
            limitAt: dayjs(new Date()).add(getRandomInt(50), 'day').toDate(),
        }
    }
    getSubtasks(id: number): Task[] {
        return [...Array(getRandomInt(3))].map(_ => this.getTask(getRandomInt(100)))
    }
}