import React from 'react';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Container from '../../../components/Container';
import useForm from '../../../hooks/UseForm';
import Button from '../../../components/Button';
import ButtonLink from '../../../components/ButtonLink';
import CategoriasRepository from '../../../repositories/Categorias'
import { useHistory } from 'react-router-dom';

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
                    }).then(
                        history.push('/')
                    )

                    clearForm();
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

                <ButtonLink to="/" backgroundcolor='#2A7AE4'>
                    Home
                 </ButtonLink>
            </Container>
        </PageRoot>
    )

}
export default CadastroCategorias;