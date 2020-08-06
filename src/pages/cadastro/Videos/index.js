import React, { useState, useEffect } from 'react';
import PageRoot from '../../../components/PageRoot';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/UseForm';
import Container from '../../../components/Container'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'
import VideoRepository from '../../../repositories/Videos'
import CategoriasRepository from '../../../repositories/Categorias'
import ButtonLink from '../../../components/ButtonLink';
import styled from 'styled-components';
import '../../../Menu.css';
import Toast from '../../../utils/Toast';

const BotoesNavContainer = styled.div`
    
    display: flex;
    justify-content: flex-start;
    
`



const CadastroVideos = () => {

    const history = useHistory()
    const valoresInicias = {
        titulo: 'Video do Cap',
        url: 'https://www.youtube.com/watch?v=A8jziuBldyA',
        categoria: 4
    }

    const { handleChange, values } = useForm(valoresInicias)
    const [categoriasNomes, setCategoriasNomes] = useState([]);
    const [categoriasIds, setCategoriasIds] = useState([]);
    useEffect(() => {
        CategoriasRepository.getAll()
            .then(reposta => {
                const nomes = []
                const ids = []
                reposta.map(res => {nomes.push(res.titulo); ids.push(res.id) })
                setCategoriasNomes(nomes)
                setCategoriasIds(ids)
            }).catch(() => {
                Toast.error('Não foi possível carregar a lista de categorias');
            })
    }, [])

    return (
        <PageRoot nolinkbutton>
            <Container>
                <h1>Cadastro de Vídeo</h1>

                <form onSubmit={function handleSubmit(infosDoEvento) {
                    infosDoEvento.preventDefault();
                    console.log(values)
                    VideoRepository.Create({
                        titulo: values.titulo,
                        url: values.url,
                        //Estou fazendo esse parseInt pois o value da option vem como string
                        categoriaId: parseInt(values.categoria) 
                    }).then(() => {
                        Toast.sucess('Vídeo cadastrado com sucesso!')
                        history.push('/')
                    }
                    ).catch(() => {
                        Toast.error('Não foi possível cadastrar o vídeo.')
                    }
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
                        type="select"
                        name="categoria"
                        onChange={handleChange}
                        options={categoriasIds}
                        optionsLabels={categoriasNomes}
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