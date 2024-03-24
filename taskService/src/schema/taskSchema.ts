import { z } from "zod"

export const taskSchema = z.object({
    title: z.string(),
    description: z.string(),
    priority: z.number().optional(),
    limitAt: z.coerce.date()
});

export const taskArraySchema = z.array(taskSchema);

export const taskUpdateSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    priority: z.number().optional(),
    limitAt: z.coerce.date().optional(),
    completed: z.boolean().optional(),
    parentId: z.number().int().optional()
});

export type TaskInput = z.infer<typeof taskSchema>;
export type TaskUpdateInput = z.infer<typeof taskUpdateSchema>;
