import React from 'react';
import './App.css';
import PockemonList from './Components/pokemonList';
import pokemons from './data';

class App extends React.Component {
  render () {

    return (
      <div>
        <h1>Pokedex</h1>
        <PockemonList pokemons={pokemons}/>
      </div>
    );
  }
}

export default App;
