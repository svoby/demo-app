import { Resolver, Query } from 'type-graphql';
import { Todo } from './todos';
import todos_dummy from './todos_dummy.json';

@Resolver(Todo)
export class TodosResolver {
    @Query(() => [Todo])
    todos(): Todo[] {
        return todos_dummy;
    }
}
