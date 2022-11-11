import {
    ButtonsBarStyled,
    TodoDetailTitleStyled,
    TodoStatusStyled,
    TogglerButtonStyled,
} from '../../components/detail/Detail.style';
import AppContext from '../../context/AppContext';
import { GetTodoDocumentApi } from '../../graphql/generated';
import { client, ssrCache } from '../../helpers/client';
import { useGetTodo } from '../../hooks/useGetTodo';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';

const DetailPage: FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const todo = useGetTodo(typeof id === 'string' ? id : id ? id[0] : '');
    const { setIsModalOpen } = useContext(AppContext);

    return (
        <>
            {todo ? (
                <>
                    <TodoDetailTitleStyled $completed={todo.completed}>{todo.title}</TodoDetailTitleStyled>
                    <TodoStatusStyled>{todo.completed ? 'Completed' : 'Not done'}</TodoStatusStyled>
                </>
            ) : (
                <TodoDetailTitleStyled>{`Todo ${id} not found`}</TodoDetailTitleStyled>
            )}
            <ButtonsBarStyled>
                <Link href="/">Back</Link>
                {todo && (
                    <TogglerButtonStyled $completed={todo.completed} onClick={() => setIsModalOpen(true)}>
                        {todo.completed ? 'Undone' : 'Make it done'}
                    </TogglerButtonStyled>
                )}
            </ButtonsBarStyled>
        </>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const todoId = context.params?.id;
    await client.query(GetTodoDocumentApi, { id: todoId }).toPromise();

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
    };
}

export default DetailPage;
