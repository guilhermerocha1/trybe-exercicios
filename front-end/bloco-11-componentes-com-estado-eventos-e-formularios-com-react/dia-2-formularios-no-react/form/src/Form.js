import React, { Component } from 'react'
import Name from './Name';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      checkbox: false,
      city: 'Fortaleza',
      descrition: '',
    }
    this.handleName = this.handleName.bind(this)
  }

  handleName({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { checkbox, nome, city, descrition } = this.state;
    return (
      <div>
        <form>
          <h1>Formulário</h1>

          <select
            name='city'
            onChange={this.handleName}
            value={city}
          >
            <option value='Fortaleza'>Fortaleza</option>
            <option value='Outros Cidades'>Outras Cidades</option>
          </select>

          <Name value={nome} handleName={this.handleName}/>

          <label>
            <input
              type='checkbox'
              name='checkbox'
              value={checkbox}
              onChange={this.handleName}
            />
          </label>

          <textarea 
            name='descrition'
            onChange={this.handleName}
            value={descrition}
          />
        </form>
      </div>
    );
  }
}

export default Form;
