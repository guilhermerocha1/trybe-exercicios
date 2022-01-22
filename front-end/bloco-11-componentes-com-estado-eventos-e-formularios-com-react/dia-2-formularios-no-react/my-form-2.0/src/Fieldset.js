import React from 'react';
import Data from './Data';

class Fieldset extends React.Component {
  constructor() {
    super();

    this.handleText = this.handleText.bind(this);

    this.state = {
      name: '',
    }
  }

  handleText({ target }) {
    const nameUpper = target.value.toUpperCase();
    this.setState({
      name: nameUpper,
    })
  }

  render() {
    return (
      <fieldset>

        <label>
          Nome:
          <input required
            type="text"
            value={this.state.name}
            onChange={this.handleText}
            maxLength="40"
          />
        </label>

        <label>
          Email:
          <input required
            type="text"
            maxLength="50"
          />
        </label>

        <label>
          CPF:
          <input required
            type="text"
            maxLength="11"
          />
        </label>

        <label>
          Endereço:
          <input required 
            type="text" 
            maxLength="200"
          />
        </label>

        <label>
          Cidade:
          <input required
            type="text"
            maxLength="28"
          />
        </label>

        <select>
          {Data.map((states) => (
            <option key={Object.values(states)}>{Object.values(states)}</option>
          ))}
        </select>

        <label>
          Casa
          <input type="radio" required />
        </label>
        <label>
          Apartamento
          <input type="radio" required />
        </label>

      </fieldset>
    )
  }
}

export default Fieldset;
