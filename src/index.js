import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video/index'
import CadastroCategoria from './pages/cadastro/Categoria';

const page404 = () => {
  return (
    <div>
        Error  404
      </div>
  )
}

ReactDOM.render(
 <BrowserRouter>
 <Switch>
  <Route path='/' component={Home} exact /> {/* Exatamente a rota com / */} 
  <Route path='/cadastro/video' component={CadastroVideo} />
  <Route path='/cadastro/categoria' component={CadastroCategoria}/>
  <Route component={page404}></Route>
  </Switch>
 </BrowserRouter>,
  document.getElementById('root')
);