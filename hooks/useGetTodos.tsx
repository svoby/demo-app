import { useMemo } from 'react';
import { useGetTodoListQueryApi } from '../graphql/generated';
import { TodoList } from '../types/todo';

export function useGetTodoList(): [TodoList | undefined, boolean] {
    const [result] = useGetTodoListQueryApi();
    const { data, fetching, error } = result;

    // possible error handling

    return useMemo(() => [data?.todos, fetching], [data, fetching]);
}
