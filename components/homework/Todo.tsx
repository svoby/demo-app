import React from 'react';

class Todo extends React.Component<any> {
    shouldComponentUpdate(prevProps: any) {
        if (this.props != prevProps) {
            return true;
        }
        return false;
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
