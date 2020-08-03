import React, { useState, useEffect } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Container from '../../../components/Container';
import useForm from '../../../hooks/UseForm';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';

const CadastroCategorias = () => {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);

    //usando custom hook para lidar com form
    const { handleChange, values, clearForm } = useForm(valoresIniciais);

    //O useEffect e um hook para executar funcoes quando eventos definidos por nos acontecem
    //, passados como segundo parametro. Se nao passar nada, a funcao e chamada em todos os eventos.
    //Se passar um array vazio, a funcao e chamada ao carregar do component

    //Aqui estou fazendo um get para o back
    useEffect(() => {
        if(window.location.href.includes('localhost')) {
          const URL = 'https://gostos-nerds.herokuapp.com/categorias'; 
          fetch(URL)
           .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Não foi possível pegar os dados');
           })
        }    
      }, []);
    
    return (
        <PageRoot>
            <Container>


                <h1>Cadastro de Categoria: {values.nome}</h1>

                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                   clearForm();
                }}
                style={{marginBottom:'30px'}}
                >

                    <FormField
                        label="Nome da Categoria"
                        type="text"
                        name="titulo"
                        value={values.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Descrição"
                        type="textarea"
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Cor"
                        type="color"
                        name="cor"
                        value={values.cor}
                        onChange={handleChange}
                    />
                    
                    <Button type='submit'>
                        Cadastrar
                    </Button>
                </form>

                <ButtonLink to="/"  backgroundcolor='#2A7AE4'>
                    Home
                 </ButtonLink>
            </Container>
        </PageRoot>
    )

}
export default CadastroCategorias;