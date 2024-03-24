export async function GET(request: Request, { params }: { params: { taskId: string } }) {
    return Response.json(await fetch(`http://task-service-runner:3000/api/v1/task/${params.taskId}`, {
        next: {
            revalidate: 20
        }
    })
    .then(r => r.json()))
}

export async function PUT(request: Request, { params }: { params: { taskId: string } }) {
    const data = await request.json();
    console.log(data);
    return Response.json(await fetch(`http://task-service-runner:3000/api/v1/task/${params.taskId}`, {
        next: {
            revalidate: 0
        },
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(r => r.json()))
}