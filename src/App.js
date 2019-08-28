import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter, Route, Switch } from 'react-router-dom'

import { DetalhesPage } from './pages/detalhes';
import { HomePage } from './pages/home';
import { NaoEncontradoPage } from './pages/naoEncontrado'

function App(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path='/'></Route>
        <Route component={DetalhesPage} path='/detalhes'></Route>
        <Route component={NaoEncontradoPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
