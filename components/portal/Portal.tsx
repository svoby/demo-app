import { FC, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

type Props = {
    children: ReactNode;
};

const Portal: FC<Props> = ({ children }) => {
    const portalElementRef = useRef(document.getElementById('portal'));

    if (portalElementRef.current === null) {
        return null;
    }

    return createPortal(children, portalElementRef.current);
};

export default Portal;
