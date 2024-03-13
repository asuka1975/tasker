import { mockTaskRepository } from "@/app/_domain/repository/MockTaskRepository";


export async function GET(request: Request, { params }: { params: { taskId: string } }) {
    const task = mockTaskRepository.getSubtasks(parseInt(params.taskId));

    return Response.json(task);
}

export async function POST(request: Request, { params }: { params: { taskId: string } }) {
    const task = mockTaskRepository.addTask(await request.json(), parseInt(params.taskId));

    return Response.json(task);
}

export const revalidate = 20;