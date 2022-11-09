import App from '../components/homework/App';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FC } from 'react';
import { createClient, Provider } from 'urql';
import BasicLayout from '../components/layout/BasicLayout';

const Index: FC = () => {
    return (
        <BasicLayout title="TODO homepage ">
            <App />
        </BasicLayout>
    );
};

export default Index;
