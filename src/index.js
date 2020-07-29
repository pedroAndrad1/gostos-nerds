import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import CadastroVideo from './pages/cadastro/Video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/cadastro/video' exact component={CadastroVideo}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


