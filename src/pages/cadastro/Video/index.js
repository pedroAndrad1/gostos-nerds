import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';

const CadastroVideos = () => {
    return (
        <PageRoot>
            <h1>Cadastro de vídeo</h1>
            <Link to='/'>Voltar pra home</Link>
        </PageRoot>
    )

}
export default CadastroVideos;