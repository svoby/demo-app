import { FC, memo } from 'react';
import React from 'react';
import { TodoItem } from '../../types/todo';
import Link from 'next/link';
import { TodoStyled } from './Todo.styl';

type TodoProps = {
    todo: TodoItem;
};

const Todo: FC<TodoProps> = ({ todo }) => {
    return (
        <TodoStyled>
            <Link href={`/detail/${todo.id}`}>{todo.title}</Link>
        </TodoStyled>
    );
};

export default memo(Todo);
