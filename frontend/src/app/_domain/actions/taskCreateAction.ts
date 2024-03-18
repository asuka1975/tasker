"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { TaskInput, taskInputSchema } from "../types/Task";

export type CreateTaskResult = {
    errors?: {
        title?: string[];
        description?: string[];
        priority?: string[];
        limitAt?: string[];
    },
    message: string | null
}

export async function createTask(prevState: any, formData: FormData): Promise<CreateTaskResult> {
    const validationFields = taskInputSchema.safeParse({
        title: formData.get('title'),
        description: formData.get('description'),
        priority: parseInt(formData.get('priority')?.toString() ?? "-1"),
        limitAt: formData.get('limitAt')
    });

    console.log(validationFields);
    if(!validationFields.success) {
        const errors = {
            errors: validationFields.error.flatten().fieldErrors,
            message: '入力にエラー項目があります. 確認してください.',
        };
        return errors;
    }

    await fetch('http://task-service-runner:3000/api/v1/task', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validationFields.data)
    })
    revalidatePath('/');
    redirect('/');
}
