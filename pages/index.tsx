import App from '../components/homework/App';
import { FC } from 'react';
import BasicLayout from '../components/layout/BasicLayout';

const Index: FC = () => {
    return (
        <BasicLayout title="TODO homepage ">
            <App />
        </BasicLayout>
    );
};

export default Index;
