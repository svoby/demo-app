import styled, { css, CSSProperties, FlattenSimpleInterpolation } from 'styled-components';

const localVariables = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    closeButtonSize: '2rem',
} as const;

type OverlayStyledProps = {
    $isActive?: boolean;
    $zIndex?: CSSProperties['zIndex'];
};

export const overlayStyle = ({
    $zIndex = 'auto',
    $isActive = true,
}: OverlayStyledProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: ${$zIndex};

    background-color: ${localVariables.backgroundColor};
    cursor: pointer;
    opacity: 0;
    pointer-events: none;

    ${!!$isActive &&
    css`
        opacity: 1;
        pointer-events: auto;
    `}
`;

export const OverlayStyled = styled.div<OverlayStyledProps>(
    ({ $isActive = true, $zIndex = 100 }) => css`
        ${overlayStyle({ $isActive, $zIndex })}
    `,
);

export const ModalStyled = styled.div`
    width: 210px;
    padding: 2rem;
    background: #fff;
    border-radius: 16px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 101;
`;

export const ModalCloseStyled = styled.button`
    position: absolute;
    top: calc(-${localVariables.closeButtonSize} / 2);
    right: calc(-${localVariables.closeButtonSize} / 2);
    width: ${localVariables.closeButtonSize};
    height: ${localVariables.closeButtonSize};
    background: linear-gradient(#444, #000);
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    &:before,
    &:after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 1rem;
        height: 2px;
        background: #fff;
    }

    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:hover {
        transform: scale(1.1);
    }
`;
