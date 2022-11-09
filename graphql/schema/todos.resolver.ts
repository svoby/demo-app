import { Resolver, Query, Arg } from 'type-graphql';
import { Todo } from './todos';
import todos_dummy from './todos_dummy.json';

@Resolver(Todo)
export class TodosResolver {
    @Query(() => [Todo])
    todos(): Todo[] {
        return todos_dummy;
    }

    @Query(() => Todo)
    todo(@Arg('id', () => String) id: string): Todo | undefined {
        return todos_dummy.find((todo) => todo.id === id);
    }
}
