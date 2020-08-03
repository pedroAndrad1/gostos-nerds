import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/UseForm';
import Container from '../../../components/Container'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import VideoRepository from '../../../repositories/Videos'
import ButtonLink from '../../../components/ButtonLink';
import styled from 'styled-components';
import '../../../Menu.css';

const BotoesNavContainer = styled.div`
    
    display: flex;
    justify-content: flex-start;
    
`



const CadastroVideos = () => {

    const history = useHistory()
    const valoresInicias = {
        titulo: 'Video do Cap',
        url: 'https://www.youtube.com/watch?v=A8jziuBldyA',
        categoria: 'Front-end'
    }

    const { handleChange, values } = useForm(valoresInicias)

    return (
        <PageRoot nolinkbutton>
            <Container>
                <h1>Cadastro de Vídeo</h1>

                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();

                    VideoRepository.Create({
                        titulo: values.titulo,
                        url: values.url,
                        categoriaId: 1
                    }).then(
                        history.push('/')
                    )


                }}
                    style={{ marginBottom: '30px' }}
                >

                    <FormField
                        label="Nome de Vídeo"
                        type="text"
                        name="titulo"
                        value={values.titulo}
                        onChange={handleChange}
                    />

                    <FormField
                        label="URL"
                        type="text"
                        name="url"
                        value={values.url}
                        onChange={handleChange}
                    />

                    <FormField
                        label="Categoria"
                        type="text"
                        name="categoria"
                        value={values.categoria}
                        onChange={handleChange}
                    />

                    <Button type='submit'>
                        Cadastrar
                    </Button>
                </form>

                <BotoesNavContainer>
                    <ButtonLink to='/' backgroundcolor='#2A7AE4' className='mr-3'>
                        Home
                    </ButtonLink>
                    <ButtonLink to='/cadastro/categoria' backgroundcolor='#2A7AE4'>
                        Cadastro de categorias
                    </ButtonLink>
                </BotoesNavContainer>
            </Container>
        </PageRoot>
    )
}
export default CadastroVideos;