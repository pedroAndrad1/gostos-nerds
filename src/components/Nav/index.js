import React from 'react';
import Menu from '../../Menu.css'
import logo from '../../assets/img/logo.png'
import ButtonLink from './components/ButtonLink';
const Nav = () =>{

    return(
        <nav className='Menu'>
            <img src={logo} className='Logo' alt='cypunflix logo'/>
            <ButtonLink className='ButtonLink' href='/'>
                Novo vídeo
            </ButtonLink>

        </nav>
    );

}
export default Nav;