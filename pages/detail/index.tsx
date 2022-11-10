import Link from 'next/link';
import { FC } from 'react';
import { ButtonsBarStyled, TodoDetailTitleStyled } from '../../components/detail/Detail.style';

const Detail: FC = () => {
    return (
        <>
            <TodoDetailTitleStyled>{`Todo  not found`}</TodoDetailTitleStyled>
            <ButtonsBarStyled>
                <Link href="/">Back</Link>
            </ButtonsBarStyled>
        </>
    );
};

export default Detail;
