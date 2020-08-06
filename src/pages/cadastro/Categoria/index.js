import React from 'react';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Container from '../../../components/Container';
import useForm from '../../../hooks/UseForm';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';
import CategoriasRepository from '../../../repositories/Categorias'
import { useHistory } from 'react-router-dom';
import Toast from '../../../utils/Toast';

const CadastroCategorias = () => {
    const history = useHistory();
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    //usando custom hook para lidar com form
    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    
    return (
        <PageRoot>
            <Container>
                        <h1>Cadastro de Categoria: {values.nome}</h1>

                        <form onSubmit={function handleSubmit(infosDoEvento) {
                            infosDoEvento.preventDefault();

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


                        }}
                            style={{ marginBottom: '30px' }}
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
                                type="color"
                                name="cor"
                                onChange={handleChange}
                                label='Cor'
                                value= {values.cor}
                            />

                            <Button type='submit'>
                                Cadastrar
                    </Button>
                        </form>

                        <ButtonLink to="/" backgroundcolor='#2A7AE4'>
                            Home
                        </ButtonLink>
            </Container>
        </PageRoot>
    )

}
export default CadastroCategorias;