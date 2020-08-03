import React from 'react';
import Nav from '../Nav';
import Footer from '../Footer';
import styled from 'styled-components';


//Wrapper para as pages. Ja que todas tem o mesmo footer e header

const Main = styled.main`

    flex: 1; /*Para a ocupar mais espaco que o nav e footer */

   

`


const PageRoot = ({ children, nolinkbutton }) => {

    return (
        <>
            <Nav nolinkbutton={nolinkbutton}/>
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}
export default PageRoot;