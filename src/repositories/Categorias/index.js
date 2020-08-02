import config from '../../config';

//Aqui estao isoladas as requisicoes de categoria para o backend

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

//Pega so as categorias
function getAll() {
    //retorna uma promisse, e necessario fazer um then para pegar as categorias
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

//Pega as categorias e os videos
function getAllWithVideos() {
     //retorna uma promisse, e necessario fazer um then para pegar as categorias
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
};