import Todo from '../components/todo/Todo';
import { GetTodoListDocumentApi } from '../graphql/generated';
import List from '../helpers/List';
import { client, ssrCache } from '../helpers/client';
import { useGetTodoList } from '../hooks/useGetTodos';
import { FC } from 'react';

const Index: FC = () => {
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

export async function getServerSideProps() {
    await client.query(GetTodoListDocumentApi, undefined).toPromise();

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
    };
}

export default Index;
