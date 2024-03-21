import { z } from "zod";

export const taskSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    priority: z.number(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    limitAt: z.coerce.date(),
    completed: z.boolean()
})
export const taskArraySchema = z.array(taskSchema);


export const taskInputSchema = z.object({
    title: z.string(),
    description: z.string(),
    priority: z.number().min(0, "優先度は０より小さくできません").max(8, "優先度は８より大きくできません"),
    limitAt: z.coerce.date(),
})

export const taskUpdateSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    priority: z.number().min(0, "優先度は０より小さくできません").max(8, "優先度は８より大きくできません").optional(),
    limitAt: z.coerce.date().optional(),
})

export type TaskInput = z.infer<typeof taskInputSchema>;
export type TaskUpdate = z.infer<typeof taskUpdateSchema>;

export type Task = z.infer<typeof taskSchema>;
export type TaskArray = z.infer<typeof taskArraySchema>;