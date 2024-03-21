export async function GET(request: Request, { params }: { params: { taskId: string } }) {
    return Response.json(await fetch(`http://task-service-runner:3000/api/v1/task/${params.taskId}/children`, {
        next: {
            revalidate: 20
        }
    })
    .then(r => r.json()))
}