import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      stateComplete: [],
    }
  };

  setStateComplete(event) {
    console.log(event.target);
  } 

  render() {
    return (
      <form>
        <Form setStateComplete={this.setStateComplete}/>        
      </form>
    );
  }
}

export default App;
