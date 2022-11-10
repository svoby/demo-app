import { FC } from 'react';
import { GetTodoListDocumentApi } from '../graphql/generated';
import Todo from '../components/todo/Todo';

import { client, ssrCache } from '../helpers/client';
import List from '../helpers/List';
import { useGetTodoList } from '../hooks/useGetTodos';

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
    const test = await client.query(GetTodoListDocumentApi, undefined).toPromise();

    return {
        props: {
            urqlState: ssrCache.extractData(),
        },
    };
}

export default Index;
