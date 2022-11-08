import { useGetTodoList } from '../../hooks/useGetTodos';
import Todo from './Todo';
import { FC } from 'react';

const App: FC = () => {
    const todoList = useGetTodoList();

    return (
        <ul>
            {!todoList && <li>Loading...</li>}

            {todoList?.map((todo, index) => (
                <Todo todo={todo} key={index} />
            ))}
        </ul>
    );
};

export default App;
