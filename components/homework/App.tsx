import { useGetTodoList } from '../../hooks/useGetTodos';
import Todo from './Todo';
import { FC, memo, ReactNode } from 'react';
import List from '../../helpers/List';

const App: FC = () => {
    const [todoList, fetching] = useGetTodoList();

    return (
        <>
            {fetching ? (
                <p>Fetching list...</p>
            ) : (
                <List items={todoList || []} render={(todo) => <Todo todo={todo} />} />
            )}
        </>
    );
};

export default memo(App);
