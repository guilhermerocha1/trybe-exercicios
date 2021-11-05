import React from  'react';
import Pockemon from './Components/Pokemons';
import pokemons from '../data';

class pokemonList extends React.Component {

  render() {
    const { pokedex } = this.props;
    return (
      <div>
        {
          pokemons.map((Pokemons) => {<Pockemon key={Pokemons.id} Pokemons={Pokemons}/>})
        }
      </div>
    );
  }
}

export default pokemonList;