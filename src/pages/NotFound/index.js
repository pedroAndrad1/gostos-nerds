import React from 'react';
import PageRoot from '../../components/PageRoot'
import styled from 'styled-components';
import NotFoundBg from '../../assets/img/404_bg1.jpg'

const NotFoundImage = styled.img`

`
const Container = styled.div`
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const NotFound = () => {
    return (
        <PageRoot nolinkbutton>
            <Container>
                <NotFoundImage src={NotFoundBg} alt='Página não encontrada' />
            </Container>
        </PageRoot>
    )
}
export default NotFound;