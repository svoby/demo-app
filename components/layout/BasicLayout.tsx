import AppContext from '../../context/AppContext';
import Modal from '../modal/Modal';
import { AppContainerStyled, AppContentStyled, AppFooterStyled, AppHeaderStyled } from './BasicLayout.style';
import Head from 'next/head';
import { FC, useMemo, useState } from 'react';

type Props = {
    title?: string;
    children: React.ReactNode;
};

const BasicLayout: FC<Props> = ({ children, title = 'My TODO list' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const contextValue = useMemo(() => ({ isModalOpen, setIsModalOpen }), [isModalOpen]);

    return (
        <AppContext.Provider value={contextValue}>
            <Head>
                <title>{title}</title>
            </Head>
            <AppContainerStyled>
                <AppHeaderStyled>{title}</AppHeaderStyled>
                <AppContentStyled>{children}</AppContentStyled>
            </AppContainerStyled>
            <AppFooterStyled>
                <a href="https://www.linkedin.com/in/lusvob/" target="_blank" rel="noreferrer">
                    LinkedIn
                </a>
            </AppFooterStyled>
            {isModalOpen && (
                <Modal onCloseCallback={() => setIsModalOpen(false)}>
                    <p>In the real environment, we would call a mutation and process a result.</p>
                </Modal>
            )}
        </AppContext.Provider>
    );
};

export default BasicLayout;
