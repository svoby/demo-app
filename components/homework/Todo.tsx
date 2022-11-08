import { Component, FC, memo, useCallback } from 'react';
import React from 'react';
import { TodoItem } from '../../types/todo';

type TodoProps = {
    todo: TodoItem;
};

const Todo: FC<TodoProps> = ({ todo }) => {
    const handleOnClick = useCallback(() => {
        window.location.href = '/detail';
    }, []);

    return (
        <li>
            <div onClick={handleOnClick}>{todo.title}</div>
        </li>
    );
};

export default memo(Todo);
