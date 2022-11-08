import Link from 'next/link';
import { FC } from 'react';

const Detail: FC = () => {
    return (
        <>
            <h1>Error: No ID specified</h1>
            <Link href="/">Back to list</Link>
        </>
    );
};

export default Detail;
