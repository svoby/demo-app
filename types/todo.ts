export interface ICanBeCompleted {
    $completed: boolean;
}

export type TodoItem = {
    id: string;
    title: string;
    completed: boolean;
};

export type TodoList = TodoItem[] | null;
