import styled from 'styled-components';

const localVariables = {
    borderRadius: '16px',
} as const;

export const AppContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    min-height: 320px;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    border-radius: ${localVariables.borderRadius};
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const AppHeaderStyled = styled.h1`
    padding: 1.5rem 2rem;
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: -0.1px;
    background: rgb(0, 150, 240, 0.2);
    color: #22a5fb;
    border-radius: ${localVariables.borderRadius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

export const AppContentStyled = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    padding: 1rem;
`;

export const AppFooterStyled = styled.footer`
    padding: 1.5rem 0;
    font-size: 0.9rem;
    opacity: 1;
`;
