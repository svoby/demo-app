import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ICanBeCompleted } from '../../types/todo';

export const TodoDetailStyled = styled.div`
    border: 1px solid green;
    flex-grow: 1;
`;

export const TodoDetailTitleStyled = styled.h1<HTMLAttributes<HTMLHeadingElement> & Partial<ICanBeCompleted>>(
    ({ $completed }) => css`
        margin: 40px 0 1rem;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        text-decoration: ${$completed ? 'line-through' : 'none'};
    `,
);

export const TodoStatusStyled = styled.div`
    opacity: 0.5;
    text-align: center;
`;

export const ButtonsBarStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding: 0.5rem;

    a,
    button {
        transition: all 0.2s ease-in-out;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const TogglerButtonStyled = styled.button<HTMLAttributes<HTMLButtonElement> & ICanBeCompleted>(
    ({ $completed }) => css`
        padding: 0.6rem 1rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        color: white;
        border-radius: 8px;
        cursor: pointer;

        ${$completed
            ? css`
                  background: red;
              `
            : css`
                  background: linear-gradient(#03db03 10%, green);
              `}

        &:hover {
            opacity: 0.8;
        }
    `,
);
