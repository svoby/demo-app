import { useState, useRef, useEffect } from 'react';
import { TodoList } from '../../types/todo';
import Todo from './Todo';

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
        }, 100);
    });

function App() {
    const [state, setState] = useState<TodoList>([]);
    const isLoaded = useRef(false);

    useEffect(() => {
        if (isLoaded.current) {
            return;
        }

        (async () => {
            var awaitedTodos = await todos();
            setState([...awaitedTodos]);
        })();
    }, []);

    return (
        <ul>
            {state.map((todo, index) => (
                <Todo todo={todo} key={index} />
            ))}
        </ul>
    );
}

export default App;
