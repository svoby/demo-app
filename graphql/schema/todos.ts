import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Todo {
    @Field(() => String)
    id!: string;

    @Field(() => String)
    title!: string;

    @Field(() => Boolean)
    completed!: boolean;
}
