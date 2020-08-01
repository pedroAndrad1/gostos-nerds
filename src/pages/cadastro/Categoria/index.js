import React, { useState, useEffect } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Container from '../../../components/Container';

const CadastroCategorias = () => {

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    //Funcao generica para aplicar atualizacoes no values do form, que e um object.
    //Tipo o setState quando se usa uma class
    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleChange(infosDoEvento) {

        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
    }

    //O useEffect e um hook para executar funcoes quando eventos definidos por nos acontecem
    //, passados como segundo parametro. Se nao passar nada, a funcao e chamada em todos os eventos.
    //Se passar um array vazio, a funcao e chamada ao carregar do component

    //Aqui estou fazendo um get para o back
    
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

                    setValues(valoresIniciais)
                }}>

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
                    <button>
                        Cadastrar
                    </button>
                </form>


                <ul>
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.titulo}
                            </li>
                        )
                    })}
                </ul>

                <Link to="/">
                    Ir para home
            </Link>
            </Container>
        </PageRoot>
    )

}
export default CadastroCategorias;