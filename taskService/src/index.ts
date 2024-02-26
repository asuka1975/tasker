import express from 'express'
import { getAllTasksHandler } from './handlers/task.handler';
import { TasksRepository } from './repositories/tasks.repository';
import { PrismaClient } from './generated/prisma/client';
import { getPrismaClient } from './infrastructure/dbClient';

const client: PrismaClient = getPrismaClient();

async function main() {

    const tasksRepository = new TasksRepository(client);

    const app: express.Express = express()
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.listen(3000, () => {
        console.log("Start on port: 3000")
    });

    app.get("/api/v1/task", getAllTasksHandler(tasksRepository));
}

main()
    .then(async () => {
        await client.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await client.$disconnect()
        process.exit(1)
    });



