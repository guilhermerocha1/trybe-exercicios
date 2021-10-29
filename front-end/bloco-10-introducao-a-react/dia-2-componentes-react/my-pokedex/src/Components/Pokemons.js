import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class Pockemon extends Component {
  render() {
    const { pokedex: {name, type, image, averageWeight} } = this.props;
    
    return (

      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        <img src={image} alt={name}/>
      </div>
    )
  }
}

export default Pockemon;