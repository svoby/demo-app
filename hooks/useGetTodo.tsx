import { useMemo } from 'react';
import { useGetTodoQueryApi } from '../graphql/generated';
import { TodoItem } from '../types/todo';

export function useGetTodo(id: string): TodoItem | undefined {
    const [result] = useGetTodoQueryApi({ variables: { id } });
    const { data, fetching, error } = result;

    // possible error handling

    return useMemo(() => data?.todo, [data]);
}
