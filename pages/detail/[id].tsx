import { FC } from 'react';
import BasicLayout from '../../components/layout/BasicLayout';
import TodoDetail from '../../components/page/detail';

const DetailPage: FC = () => {
    return (
        <BasicLayout title="TODO detail">
            <TodoDetail />
        </BasicLayout>
    );
};

export default DetailPage;
