import React from 'react';
import Menu from '../../Menu.css'
import logo from '../../assets/img/logo.png'
import ButtonLink from './components/ButtonLink';
import { Link } from 'react-router-dom';
const Nav = () =>{

    return(
        <nav className='Menu'>
            <Link to='/'><img src={logo} className='Logo' alt='cypunflix logo'/></Link>
            <ButtonLink className='ButtonLink' to='cadastro/video'>
                Novo vídeo
            </ButtonLink>

        </nav>
    );

}
export default Nav;