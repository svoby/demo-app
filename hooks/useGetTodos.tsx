import { useState, useRef, useEffect, FC, useMemo } from 'react';
import { TodoList } from '../types/todo';

var todos = (): Promise<TodoList> =>
    new Promise((res) => {
        setTimeout(() => {
            res([
                {
                    id: '1',
                    title: 'Go shopping',
                    done: false,
                },
                {
                    id: '2',
                    title: 'Job interview',
                    done: false,
                },
                {
                    id: '3',
                    title: 'Prepare homework',
                    done: false,
                },
            ]);
        }, 1000);
    });

export function useGetTodoList(): TodoList | null {
    const [state, setState] = useState<TodoList>(null);

    (async () => {
        const awaitedTodos = await todos();

        if (awaitedTodos != null) {
            setState([...awaitedTodos]);
        }
    })();

    return useMemo(() => state, [state]);
}
