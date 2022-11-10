import { FC, memo } from 'react';
import React from 'react';
import { TodoItem } from '../../types/todo';
import NextLink from 'next/link';
import { TodoCheckStyled, TodoLinkStyled, TodoStyled } from './Todo.styl';

type TodoProps = {
    todo: TodoItem;
};

const Todo: FC<TodoProps> = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <TodoStyled>
            <TodoCheckStyled $completed={completed} />
            <TodoLinkStyled $completed={completed}>
                <NextLink href={`/detail/${id}`}>{title}</NextLink>
            </TodoLinkStyled>
        </TodoStyled>
    );
};

export default memo(Todo);
