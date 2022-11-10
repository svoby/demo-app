import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ICanBeCompleted } from '../../types/todo';

const localVariables = {
    transition: 'all 0.2s ease-in-out',
    checkColor: '#32a2f6',
    completedColor: '#999',
};

export const TodoStyled = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border: 1px solid transparent;
    border-radius: 8px;
    transition: ${localVariables.transition};

    &:hover {
        background: #d6ffe8;
        border-color: #b6ffb6;
    }
`;

export const TodoCheckStyled = styled.button<HTMLAttributes<HTMLButtonElement> & ICanBeCompleted>(
    ({ $completed }) => css`
        width: 1.5rem;
        height: 1.5rem;
        background: white;
        border: 2px solid ${localVariables.checkColor};
        border-radius: 50%;
        position: relative;
        cursor: pointer;

        ${$completed &&
    css`
            opacity: 0.5;
            &:after {
                content: ' ';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
                width: 0.3rem;
                height: 0.5rem;
                margin-top: -1px;
                border-right: 2px solid ${localVariables.checkColor};
                border-bottom: 2px solid ${localVariables.checkColor};
            }
        `}
    `,
);

export const TodoLinkStyled = styled.span<HTMLAttributes<HTMLSpanElement> & ICanBeCompleted>(
    ({ $completed }) => css`
        flex-grow: 1;

        a {
            display: block;
            padding: 1rem;
            color: ${$completed ? localVariables.completedColor: '#000'};
            transition: ${localVariables.transition};
            text-decoration: ${$completed ? 'line-through' : 'none'};
            border: none;

            &:hover {
                color: #388438;
            }
        }
    `,
);
