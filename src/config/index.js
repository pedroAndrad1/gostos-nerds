//variaveis de ambiente para fazer requisicoes pro backend

const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://gostos-nerds.herokuapp.com';

export default {
  URL_BACKEND,
};