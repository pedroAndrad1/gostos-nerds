import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ButtonLinkWrapper = styled(Link)`
  display: block;
  background: ${props => props.backgroundcolor || 'inherit'};
  color: var(--white);
  border: 1px solid var(--white);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: opacity .3s;

  @media (max-width: 800px){
    padding: 11px;
  }


  &:hover,
  &:focus {
    opacity: .5;
  }

  ${ ({ nolinkbutton }) => {
    
    return nolinkbutton && css`
      
      &{
        display: none
      }
        
    `
    }

  }



`

function ButtonLink({ className, to, children, nolinkbutton, backgroundcolor, margin }) {



  return (

    <ButtonLinkWrapper className={className} to={to} nolinkbutton={nolinkbutton} backgroundcolor={backgroundcolor}>
      {children}
    </ButtonLinkWrapper>

  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string
};

export default ButtonLink;