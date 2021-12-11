import React from 'react';

class Pokedex extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className='container-pokemon'>
        {data.map((elem) => {
          return (
            <section className='pokemons'>
              <p>{elem.name}</p>
              <p>{elem.type}</p>
              <p>Peso: {elem.averageWeight.value}</p>
              <div className='img'>
              <img src={elem.image} alt=""/>
              </div>
            </section>
          )
        })}
      </div>
    )
  }
}

export default Pokedex;
