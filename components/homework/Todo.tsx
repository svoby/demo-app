import { Component, FC, memo, useCallback } from 'react';
import React from 'react';
import { TodoItem } from '../../types/todo';
import Link from 'next/link';

type TodoProps = {
    todo: TodoItem;
};

const Todo: FC<TodoProps> = ({ todo }) => {
    return (
        <li>
            <Link href={`/detail/${todo.id}`}>{todo.title}</Link>
        </li>
    );
};

export default memo(Todo);
