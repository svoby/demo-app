import { useGetTodoList } from '../../hooks/useGetTodos';
import Todo from './Todo';
import { FC, memo } from 'react';

const App: FC = () => {
    const [todoList, fetching] = useGetTodoList();

    return (
        <>
            <h1>TODO list</h1>
            {fetching ? (
                <p>Fetching TODO list...</p>
            ) : (
                <ul>
                    {todoList?.map((todo, index) => (
                        <Todo todo={todo} key={index} />
                    ))}
                </ul>
            )}
        </>
    );
};

export default memo(App);
