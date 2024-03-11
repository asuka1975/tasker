import { mockTaskRepository } from "@/app/_domain/repository/MockTaskRepository";


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    if(searchParams.get("onlyRoot")) {
        return Response.json(mockTaskRepository.getRootTasks())
    }

    return Response.json(mockTaskRepository.getAllTasks());
}

export async function POST(request: Request) {
    const json = await request.json();

    mockTaskRepository.addTask(json, json.parentId);
}


export const revalidate = 20;