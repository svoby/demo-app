import App from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Todo from '../components/homework/Todo';
import styles from '../styles/Home.module.css';

export default function Index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Demo TODO</title>
                <meta name="description" content="Homework demo app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <App />
            <footer className={styles.footer}>@copy; Luboš Svoboda</footer>
        </div>
    );
}
