import { Request, Response } from "express";
import { TasksRepository } from "../repositories/tasks.repository";
import { taskSchema, TaskInput, taskArraySchema, taskUpdateSchema } from "../schema/taskSchema";

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

export function getTasksHandler(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        (req.query.onlyRoot ? tasksRepository.getRootTasks() : tasksRepository.getAllTasks())
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

export function getRootTasksHandler(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        tasksRepository.getRootTasks()
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

export function getTaskHandler(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            tasksRepository.getTaskById(id)
                .then(task => {
                    if(task === null) {
                        res.status(404).json({
                            status: 404,
                            message: `Not Found (id: ${id})`
                        })
                    } else {
                        res.json(task)
                    }
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            })
        }
    }
}

export function getChildrenHandler(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id)
            tasksRepository.getChildrenByParentId(id)
                .then(tasks => {
                    res.json(tasks)
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            })
        }
    }
}

export function postTask(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            tasksRepository.createTask(taskSchema.parse(req.body))
                .then(task => {
                    res.json(task)
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            });
        }
    }
}

export function postTasks(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            tasksRepository.createTasks(taskArraySchema.parse(req.body))
                .then(task => {
                    res.json(task)
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            });
        }
    }
}

export function postTaskToParent(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            tasksRepository.createTaskToParent(taskSchema.parse(req.body), id)
                .then(task => {
                    res.json(task)
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            });
        }
    }
}

export function updateTask(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            tasksRepository.updateTask(id, taskUpdateSchema.parse(req.body))
                .then(task => {
                    res.json(task)
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            });
        }
    }
}

export function deleteTask(tasksRepository: TasksRepository): Handler {
    return (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            tasksRepository.deleteTask(id)
                .then(task => {
                    res.json(task)
                })
                .catch(e => {
                    res.status(500).json({
                        status: 500,
                        message: e
                    })
                })
        } catch(e) {
            res.status(400).json({
                status: 400,
                message: `Bad Request ${e}`
            });
        }
    }
}