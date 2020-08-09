import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Container from '../../../components/Container';
import MeuUseForm from '../../../hooks/UseForm';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';
import CategoriasRepository from '../../../repositories/Categorias'
import { useHistory } from 'react-router-dom';
import Toast from '../../../utils/Toast';

const CadastroCategorias = () => {
    const history = useHistory();
    const valoresIniciais = {
        titulo: '',
        descricao: '',
        cor: '#6600cc',
    }

    //usando custom hook para lidar com form
    const { handleChange, values } = MeuUseForm(valoresIniciais);

    const formValidator = () => {

        let ok = true
        
        const config = {
            closeButton: false,
            hideProgressBar: true,
            autoClose: 4000,
            position: "top-left",
        }

        if (values.titulo.length === 0) {
            Toast.info('É necessário ter um título!', config);
            console.log('setei falso')
            ok = false;
        }
        if (values.titulo.length > 30) {
            Toast.info('O título não deve ter mais de 30 caracteres!', config);
            ok = false;
        }

        if (ok) {
            CategoriasRepository.createCategory({
                titulo: values.titulo,
                cor: values.cor
            }).then(() => {
                Toast.sucess('Categoria cadastrada com sucesso!')
                history.push('/')
            }
            ).catch(() => {
                Toast.error('Não foi possível cadastrar a categoria.')
            }
            )
        }
    }

    return (
        <PageRoot>
            <Container>
                <h1>Cadastro de Categoria: </h1>

                <form onSubmit={(event) => {
                    event.preventDefault();

                    formValidator();


                }}
                    style={{ marginBottom: '30px' }}
                >

                    <FormField
                        label='Nome da categoria'
                        type="text"
                        name='titulo'
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
                        type="color"
                        name="cor"
                        onChange={handleChange}
                        label='Cor'
                        value={values.cor}
                    />

                    <Button type='submit'>
                        Cadastrar
                            </Button>
                </form>

                <ButtonLink to="/" >
                    Home
                        </ButtonLink>
            </Container>
        </PageRoot >
    )

}
export default CadastroCategorias;