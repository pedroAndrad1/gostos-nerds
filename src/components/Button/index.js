import React from 'react';
import styled from 'styled-components';

const ButtonTemplate = styled.button`
  color: var(--secondary);
  background-color: transparent;
  border: 1px solid var(--secondary);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  @media (max-width: 800px){
    width: 100%
  }

    
  &:hover,
  &:focus {
    opacity: .5;
  }


  
`


const Button = ({ type, children }) => {

  return (
    <ButtonTemplate type={type}>
      {children}
    </ButtonTemplate>
  )

}
export default Button;