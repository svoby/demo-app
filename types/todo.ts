export type TodoItem = {
    id: string;
    title: string;
    done: boolean;
};

export type TodoList = TodoItem[] | null;
