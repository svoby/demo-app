import AppContext from '../../context/AppContext';
import { TodoItem } from '../../types/todo';
import { TodoCheckStyled, TodoLinkStyled, TodoStyled } from './Todo.styl';
import NextLink from 'next/link';
import { FC, memo, useContext } from 'react';
import React from 'react';

type TodoProps = {
    todo: TodoItem;
};

const Todo: FC<TodoProps> = ({ todo }) => {
    const { id, title, completed } = todo;
    const { setIsModalOpen } = useContext(AppContext);

    return (
        <TodoStyled>
            <TodoCheckStyled $completed={completed} onClick={() => setIsModalOpen(true)} />
            <TodoLinkStyled $completed={completed}>
                <NextLink href={`/detail/${id}`}>{title}</NextLink>
            </TodoLinkStyled>
        </TodoStyled>
    );
};

export default memo(Todo);
