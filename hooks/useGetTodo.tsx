import { useGetTodoQueryApi } from '../graphql/generated';
import { TodoItem } from '../types/todo';
import { useMemo } from 'react';

export function useGetTodo(id: string): TodoItem | undefined {
    const [result] = useGetTodoQueryApi({ variables: { id } });
    const { data } = result;

    // possible error handling

    return useMemo(() => data?.todo, [data]);
}
