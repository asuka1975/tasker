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

export type Task = z.infer<typeof taskSchema>;
export type TaskArray = z.infer<typeof taskArraySchema>;