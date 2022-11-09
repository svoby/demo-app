import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { FC } from 'react';
import { createClient, Provider } from 'urql';

type Props = {
    title?: string;
    children: React.ReactNode;
};

const BasicLayout: FC<Props> = ({ children, title }) => {
    const client = createClient({
        url: 'http://localhost:3000/api/graphql',
    });

    return (
        <Provider value={client}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Homework demo app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1>{title}</h1>
                {children}
                <footer className={styles.footer}>&copy; Luboš Svoboda</footer>
            </div>
        </Provider>
    );
};

export default BasicLayout;
