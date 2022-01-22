import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numerodeCliques: 0,
      colors: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.clickColorsRed = this.clickColorsRed.bind(this);
    this.clickColorsGreen = this.clickColorsGreen.bind(this);
    this.clickColorsYellow = this.clickColorsYellow.bind(this);
  }

  handleClick() {
    this.setState((estadoAnt, _prop) => ({
      numerodeCliques: estadoAnt.numerodeCliques + 1
    }))
  }

  clickColorsRed() {
    this.setState({ colors: 'button-red' });
  }

  clickColorsGreen() {
    this.setState({ colors: 'button-green' });
  }

  clickColorsYellow() {
    this.setState({ colors: 'button-yellow' });
  }

  render() {
    return (
      <>
        <div className='container'>
          <button id='button' className={this.state.colors} onClick={this.handleClick}>{this.state.numerodeCliques}</button>
        </div>
        <div className='container-buttons'>
          <button onClick={this.clickColorsRed} className="buttons">Vermelho</button>
          <button onClick={this.clickColorsGreen} className="buttons">Verde</button>
          <button onClick={this.clickColorsYellow} className="buttons">Amarelo</button>
        </div>
      </>
    )
  }
}

export default App;
