import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useGetTodo } from '../../hooks/useGetTodo';

const TodoDetail: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const todo = useGetTodo(typeof id === 'string' ? id : id ? id[0] : '');

    return (
        <>
            {todo && (
                <ul>
                    <li>{todo.id}</li>
                    <li>{todo.title}</li>
                    <li>{todo.completed ? 'Done' : 'Not done'}</li>
                </ul>
            )}
            <p>
                <Link href="/">Back to list</Link>
            </p>
        </>
    );
};

export default TodoDetail;
