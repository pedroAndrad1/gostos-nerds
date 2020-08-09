import React from "react";
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }

  

`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 57px;
  position: absolute; 
  top: 0;
  left: 16px;
  
  display: flex;
  align-items: center;
  
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  
  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 16px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }
  /**Se esse elemento, on focus, nao for do type color, pq nao faze sentido essa animacao no color,
    entao aplica o estilo no Label.text seguido deste elemento */
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(.6) translateY(-10px);
  }

  /**O styled component pode receber um funcao e nela vc pode usar variaveis declaradas fora dele.
    Esta recebe o value do props, e ve se ele e maior que um. Ou seja, ve se tem algo inscrito no input.
    Caso sim, ele mantem a animacao .

    Para isso e preciso importar o usar o elemento css do styled-components
  */
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
        }
      `;
  }
  }
`;

const Select = styled.select`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  padding: 10px 16px;
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .3s;
  
  &:focus {
    border-bottom-color: var(--primary);
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 50%;
  
`

const tagSelector = tag => {
  switch (tag) {
    case 'textarea':
      return 'textarea'
    case 'select':
      return 'select'
    default:
      return 'input'
  }
}

const FormField = ({ label, type, name, value, onChange, options, optionsLabels }) => {
  //Ve se o type e um text area
  // const isTypeTextArea = type === 'textarea';
  //Caso sim, a tag sera um textarea.
  //Caso nao, a tag do formField sera um input por default.
  //Isso usando o 'as' do styled component
  //const tag = isTypeTextArea ? 'textarea' : 'input';

  const tag = tagSelector(type);

  const isTypeTextSelect = type === 'select';



  return (
    <FormFieldWrapper>
      {
        isTypeTextSelect === true &&
        <>
          <Select onChange={onChange} name={name} >
            <option value='Não selecionado' key='Primeiro' disabled selected>Selecione uma categoria...</option>
            {
              options.map((option, i) => {
                return (
                  <option value={option} key={i}>{optionsLabels[i]}</option>
                )
              })
            }
          </Select>
        </>
      }
      {
        isTypeTextSelect === false &&
        <Label>
          <Input
            as={tag}
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
          <Label.Text>
            {label}
        :
        </Label.Text>
        </Label>

      }
    </FormFieldWrapper>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(String),
};

export default FormField;