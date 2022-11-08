import { useGetTodoList } from '../../hooks/useGetTodos';
import Todo from './Todo';
import { FC } from 'react';

const App: FC = () => {
    const todoList = useGetTodoList();

    return (
        <>
            <h1>Todo list</h1>
            {!todoList && <p>Fetching todo list...</p>}
            <ul>
                {todoList?.map((todo, index) => (
                    <Todo todo={todo} key={index} />
                ))}
            </ul>
        </>
    );
};

export default App;
