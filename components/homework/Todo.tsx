import { Component } from 'react';
import React from 'react';
import { TodoItem } from '../../types/todo';

type TodoProps = {
    todo: TodoItem;
};

class Todo extends Component<TodoProps> {
    constructor(props: TodoProps) {
        super(props);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    shouldComponentUpdate(nextProps: TodoProps): boolean {
        const changed = this.props.todo.title !== nextProps.todo.title || this.props.todo.done !== nextProps.todo.done;
        return changed;
    }

    handleOnClick() {
        window.location.href = '/detail';
    }

    render() {
        return (
            <li>
                <div onClick={this.handleOnClick}>{this.props.todo.title}</div>
            </li>
        );
    }
}

export default Todo;
