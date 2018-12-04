import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ListaCidadoes from './components/ListaCidadoes';
import CadastroCidadao from './components/CadastroCidadao';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={ListaCidadoes} />
          <Route path="/cadastro" exact component={CadastroCidadao} />
        </div>
      </Router>
    );
  }
}

export default App;
