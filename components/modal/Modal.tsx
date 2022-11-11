import Portal from '../portal/Portal';
import { ModalCloseStyled, ModalStyled, OverlayStyled } from './Modal.styl';
import { FC, ReactNode, useEffect } from 'react';

type Props = {
    onCloseCallback?: () => void;
    children: ReactNode;
};

const Modal: FC<Props> = ({ children, onCloseCallback }) => {
    useEffect(() => {
        const handler: EventListener = (event) => {
            if (event instanceof KeyboardEvent && event.key === 'Escape' && typeof onCloseCallback === 'function') {
                onCloseCallback();
            }
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [onCloseCallback]);

    return (
        <Portal>
            <OverlayStyled onClick={onCloseCallback} />
            <ModalStyled>
                {children}
                <ModalCloseStyled onClick={onCloseCallback} />
            </ModalStyled>
        </Portal>
    );
};

export default Modal;
