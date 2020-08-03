import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel'
import PageRoot from '../../components/PageRoot';
import categoriasRepository from '../../repositories/Categorias'




function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        //setando os videos vindo do back no state
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <PageRoot>

      {/** Se o array dados iniciais for maior que 0, que dizer que 
       * ja chegou a resposta do servidor e foi ok
       */}
      {dadosIniciais.length > 0 && dadosIniciais.map((categoria, i) => {

        if (i === 0) {
          return (
            <>

              <BannerMain
                url={dadosIniciais[0].videos[0].url}
                videoTitle={dadosIniciais[0].videos[0].titulo}
                videoDescription='Teste'
              />
              <Carousel ignoreFirstVideo category={categoria} key={i} />

            </>
          )
        }

        return ( <Carousel category={categoria} key={i} /> )

      })

      }



    </PageRoot>

  );
}

export default Home;
