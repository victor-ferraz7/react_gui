import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { string } from 'prop-types'

import { DetalhesPage } from './pages/detalhes';
import { HomePage } from './pages/home';
import { NaoEncontradoPage } from './pages/naoEncontrado';
import { AppBar, Button, Toolbar, Typography, Container } from '@material-ui/core';

function App(props) {


  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button color="inherit" component={Link} to="/detalhes">
            <Typography variant="h6">Detalhes</Typography>
          </Button>
        </Toolbar>

      </AppBar>
      <Container>
        <Switch>
          <Route component={HomePage} exact path='/'></Route>
          <Route component={DetalhesPage} path='/detalhes'></Route>
          <Route component={NaoEncontradoPage}></Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
