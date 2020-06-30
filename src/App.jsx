import React from 'react';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <PokemonList />
        </Route>

        <Route path="/pokemon/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
