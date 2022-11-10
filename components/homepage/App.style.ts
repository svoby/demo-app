import styled from 'styled-components';

export const AppContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 300px;
    width: 320px;
    background: rgba(255, 255, 255, 0.9);
    color: #000;
    border-radius: 16px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

export const AppHeaderStyled = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: -0.1px;
    padding: 1.5rem 2rem;
    margin: 0;
    background: rgb(0, 151, 241, 0.2);
    border-radius: 16px 16px 0 0;
`;

export const AppContentStyled = styled.div`
    padding: 1rem;
`;

export const AppFooterStyled = styled.footer`
    padding: 20px;
    opacity: 0.5;
    font-size: 0.8rem;
`;
