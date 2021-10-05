import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render() {
    return (    
      <div>
        <h1 className='title'>PokeDex</h1>
        <Pokedex />
      </div>    
    );
  }
}

export default App;
