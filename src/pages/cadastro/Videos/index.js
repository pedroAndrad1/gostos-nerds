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
        titulo: '',
        url: '',
        categoria: 1
    }

    const { handleChange, values } = useForm(valoresInicias)
    const [categoriasNomes, setCategoriasNomes] = useState([]);
    const [categoriasIds, setCategoriasIds] = useState([]);

    const formValidator = () => {

        const config= {
            closeButton: false,
            hideProgressBar: true,
            autoClose: 4000,
            position: "top-left",
        }

        let erro = false

        if (values.titulo.length === 0) {
           Toast.info('É necessário ter um título!', config)
           erro = true
        }
        if (values.titulo.length > 30) {
            Toast.info('O título não deve ter mais de 30 caracteres!', config)
            erro = true
        }
        if (values.url.length === 0) {
            Toast.info('É necessário ter uma url!', config)
            erro = true
        }

        return !erro;
    }

    useEffect(() => {
        CategoriasRepository.getAll()
            .then(reposta => {
                const nomes = []
                const ids = []
                reposta.map(res => { nomes.push(res.titulo); ids.push(res.id) })
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

                    if (formValidator()) {
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
                    }


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
                    <ButtonLink to='/' className='mr-3'>
                        Home
                    </ButtonLink>
                    <ButtonLink to='/cadastro/categoria'>
                        Cadastro de categorias
                    </ButtonLink>
                </BotoesNavContainer>
            </Container>
        </PageRoot>
    )
}
export default CadastroVideos;