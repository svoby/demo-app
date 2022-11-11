import { useGetTodoListQueryApi } from '../graphql/generated';
import { TodoList } from '../types/todo';
import { useMemo } from 'react';

export function useGetTodoList(): [TodoList | undefined, boolean] {
    const [result] = useGetTodoListQueryApi();
    const { data, fetching } = result;

    // possible error handling

    return useMemo(() => [data?.todos, fetching], [data, fetching]);
}
