export interface ICanBeCompleted {
    completed: boolean;
}
export type TodoItem = ICanBeCompleted & {
    id: string;
    title: string;
};

export type TodoList = TodoItem[] | null;
