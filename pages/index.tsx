import App from '../components/homework/App';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FC } from 'react';

const Index: FC = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Demo TODO</title>
                <meta name="description" content="Homework demo app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <App />
            <footer className={styles.footer}>&copy; Luboš Svoboda</footer>
        </div>
    );
};

export default Index;
