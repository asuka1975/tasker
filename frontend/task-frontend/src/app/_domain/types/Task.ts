export type Task = {
    id: number;
    title: string;
    description: string;
    priority: number;
    createdAt: Date;
    updatedAt: Date;
    limitAt: Date;
}