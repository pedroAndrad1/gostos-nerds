import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import CadastroCategoria from './pages/cadastro/Categoria'
import CadastroVideos from './pages/cadastro/Videos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/cadastro/video' exact component={CadastroVideos}/>
      <Route path='/cadastro/categoria' exact component={CadastroCategoria}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


