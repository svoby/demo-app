import { useState, useRef, useEffect, FC, useMemo } from 'react';
import { TodoList } from '../types/todo';

export function useGetTodoList(): TodoList | null {
    const [state, setState] = useState<TodoList>(null);

    useEffect(() => {
        fetch('/api/list').then((res) => {
            res.json().then((json) => {
                setState(json);
            });
        });
    }, []);

    return useMemo(() => state, [state]);
}
