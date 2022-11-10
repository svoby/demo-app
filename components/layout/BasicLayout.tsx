import Head from 'next/head';
import { FC } from 'react';
import { AppContainerStyled, AppContentStyled, AppFooterStyled, AppHeaderStyled } from './BasicLayout.style';

type Props = {
    title?: string;
    children: React.ReactNode;
};

const BasicLayout: FC<Props> = ({ children, title = 'My TODO list' }) => {
    return (
        <>
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
        </>
    );
};

export default BasicLayout;
