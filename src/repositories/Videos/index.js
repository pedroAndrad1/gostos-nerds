import config from '../../config';

//Aqui estao isoladas as requisicoes de categoria para o backend

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

//Pega so as categorias
function Create(objetoVideo) {
    //retorna uma promisse, e necessario fazer um then para pegar as categorias
  return fetch(`${URL_VIDEOS}`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(objetoVideo)
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}



export default {
  Create
};