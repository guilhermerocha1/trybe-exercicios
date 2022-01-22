import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Pokemon from './components/Pokedex.js';
import data from './data.js'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Pokemon data={data}/>
      </>
    )
  }
}

export default App;
