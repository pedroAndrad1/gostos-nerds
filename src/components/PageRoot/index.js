import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import styled from 'styled-components';


//Wrapper para as pages. Ja que todas tem o mesmo footer e header

const Main = styled.main`

    flex: 1; /*Para a ocupar mais espaco que o nav e footer */

    padding-top: 94px; /*O header ta fixed, ou seja, fora do fluxo. Sem isso o Main fica atras dele */

    /** Pra funcionar like a container */
    padding-left: 5%;
    padding-right: 5%;

`


const PageRoot = ({ children }) => {

    return (
        <>
            <Nav />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}
export default PageRoot;