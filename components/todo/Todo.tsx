import { TodoItem } from '../../types/todo';
import { TodoCheckStyled, TodoLinkStyled, TodoStyled } from './Todo.styl';
import NextLink from 'next/link';
import { FC, memo } from 'react';
import React from 'react';

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
