import React from 'react';
import dados_iniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'
import PageRoot from '../../components/PageRoot';


function Home() {
  return (
    <PageRoot>

      <BannerMain
        url='https://www.youtube.com/watch?v=RJ6ytUF7Ado'
        videoTitle='Blade Runner, Lágrimas nas chuvas'
        videoDescription='Chorei aqui com essa epifania sobre a nossa insignificante, mas tão bela e preciosa, existência.'
      />
      <Carousel category={dados_iniciais.categorias[0]} ignoreFirstVideo />
      <Carousel category={dados_iniciais.categorias[1]} ignoreFirstVideo />
      <Carousel category={dados_iniciais.categorias[2]} ignoreFirstVideo />
      <Carousel category={dados_iniciais.categorias[3]} ignoreFirstVideo />
      <Carousel category={dados_iniciais.categorias[4]} ignoreFirstVideo />
      <Carousel category={dados_iniciais.categorias[5]} ignoreFirstVideo />

    </PageRoot>

  );
}

export default Home;
