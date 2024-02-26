import { Request, Response } from "express";
import { Task } from "../generated/prisma/client";
import { TasksRepository } from "../repositories/tasks.repository";

type Handler = (req: Request, res: Response) => void;

export function getAllTasksHandler(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
         tasksRepository.getAllTasks()
            .then(tasks => {
                res.json(tasks)
            })
            .catch(e => {
                res.status(500).json({
                    status: 500,
                    message: e
                })
            })
    }
}