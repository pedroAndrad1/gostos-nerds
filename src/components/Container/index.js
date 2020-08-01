import React from 'react';
import styled from 'styled-components';

const ContainerBox = styled.div`
    padding: 0 30px;
`;

const Container = ({children})=> {

    return (
        <ContainerBox>
            {children}
        </ContainerBox>
    )
}
export default Container;