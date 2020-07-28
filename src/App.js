import React from 'react';
import Nav from './components/Nav';
import BannerMain from './components/BannerMain'
import dados_iniciais from './data/dados_iniciais.json';
import Carousel from './components/Carousel';
import Footer from './components/Footer'

function App() {
  return (
    <div style={{}}>
      <Nav />
      <BannerMain 
        url='https://www.youtube.com/watch?v=RJ6ytUF7Ado' 
        videoTitle='Blade Runner, Lágrimas nas chuvas'
        videoDescription='Chorei aqui com essa epifania sobre a nossa insignificante, mas tão bela e preciosa, existência.'
        />
      <Carousel category = {dados_iniciais.categorias[0]} ignoreFirstVideo/>
      <Carousel category = {dados_iniciais.categorias[1]} ignoreFirstVideo/>
      <Carousel category = {dados_iniciais.categorias[2]} ignoreFirstVideo/>
      <Carousel category = {dados_iniciais.categorias[3]} ignoreFirstVideo/>
      <Carousel category = {dados_iniciais.categorias[4]} ignoreFirstVideo/>
      <Carousel category = {dados_iniciais.categorias[5]} ignoreFirstVideo/>
      <Footer />
    </div>
  );
}

export default App;
