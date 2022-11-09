import Link from 'next/link';
import { FC } from 'react';
import BasicLayout from '../../components/layout/BasicLayout';

const Detail: FC = () => {
    return (
        <BasicLayout title="TODO detail">
            <h1>TODO detail</h1>
            <p>Not implemented yet</p>
            <p>
                <Link href="/">Back to list</Link>
            </p>
        </BasicLayout>
    );
};

export default Detail;
