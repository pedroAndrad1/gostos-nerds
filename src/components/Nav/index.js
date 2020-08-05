import React from 'react';
import logo from '../../assets/img/gn_logo.png'
import ButtonLink from '../ButtonLink';
import { Link } from 'react-router-dom';
import '../../Menu.css';
import Toast from '../../utils/Toast'


const Nav = ({ nolinkbutton }) => {


    return (
        <nav className='Menu'>
            <Link to='/'><img src={logo} className='Logo' alt='Gostos Nerds logo' /></Link>
            {/**Colacando "/" antes do endereco no "to" eu evito a concatenacao da url */}
            <ButtonLink className='ButtonLink' to='/cadastro/video' nolinkbutton={nolinkbutton}>
                Novo vídeo
            </ButtonLink>
        </nav>
    );

}
export default Nav;