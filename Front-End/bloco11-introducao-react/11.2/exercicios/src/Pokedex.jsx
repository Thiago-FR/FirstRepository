import React from 'react';
import data from './data'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    return (
      <div className='container-main'>
        {data.map(poke => {
          return (
            <Pokemon 
            name={poke.name} 
            type={poke.type} 
            weight={poke.averageWeight.value}
            measurementUnit={poke.averageWeight.measurementUnit} 
            img={poke.image}/>
          )
        })}
      </div>
    );
  }
}

export default Pokedex;