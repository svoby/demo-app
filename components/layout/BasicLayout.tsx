import Head from 'next/head';
import { FC } from 'react';
import { createClient, Provider } from 'urql';
import { AppContainerStyled, AppContentStyled, AppFooterStyled, AppHeaderStyled } from '../homepage/App.style';

type Props = {
    title?: string;
    children: React.ReactNode;
};

const AppContainer: FC<Props> = ({ children, title = 'My TODO list' }) => {
    const client = createClient({
        url: 'http://localhost:3000/api/graphql',
    });

    return (
        <Provider value={client}>
            <Head>
                <title>{title}</title>
            </Head>
            <AppContainerStyled>
                <AppHeaderStyled>{title}</AppHeaderStyled>
                <AppContentStyled>{children}</AppContentStyled>
            </AppContainerStyled>
            <AppFooterStyled>&copy; Luboš Svoboda</AppFooterStyled>
        </Provider>
    );
};

export default AppContainer;
