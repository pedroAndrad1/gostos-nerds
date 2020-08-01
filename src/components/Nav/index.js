import React from 'react';
import logo from '../../assets/img/gn_logo.png'
import ButtonLink from './components/ButtonLink';
import { Link } from 'react-router-dom';
import '../../Menu.css';

const Nav = () =>{
    // teste
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