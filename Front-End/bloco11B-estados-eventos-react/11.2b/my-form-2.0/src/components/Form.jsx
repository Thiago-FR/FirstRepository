import React from 'react';
import Name from './Name';
import CPF from './CPF';
import Email from './Email';
import Estado from './Estado';
import Cidade from './Cidade';
import Endereco from './Endereco';
import Checkbox from './Checkbox';
import Radio from './Radio';
import TextArea from './TextArea'
import Button from './Button';
import ResumForm from './ResumForm';


import './Form.css';

const INITIAL_STATE = {
  name: '',
  cpf: '',
  email: '',
  estado: 'Acre',
  cidade: '',
  endereco: '',
  checkbox: false,
  radio: '',
  resumo: '',
  cargo: '',
  descricao: '',
  display: 'none',
  submitted: false,
};

class Form extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = (event) => {
    const {name} = event.target;
    const value = event.target.name === 'checkbox' ? event.target.checked : event.target.value
    this.setState({[name]: value});
    this.validation(event);
    if (name === 'display') this.setSubmitted(event);
  };

  validation = (event) => {
    event.target.className = event.target.className.replace(' is-invalid', '').replace(' is-valid', '');
    
    if (event.target.name === 'name') {
      return event.target.value.split(' ').length > 1 ? event.target.className += ' is-valid' : event.target.className += ' is-invalid';
    }
    
    if (event.target.name === 'cpf') {
      return event.target.value.length !== 11 ? event.target.className += ' is-invalid' : event.target.className += ' is-valid';
    }

    if (event.target.name === 'email') {
      return event.target.value.includes("@") && event.target.value.includes(".") ? event.target.className += ' is-valid' : event.target.className += ' is-invalid';
    }
    
  }

  clearState = (event) => {
    event.preventDefault();
    this.setState(INITIAL_STATE);
  }

  setSubmitted = (event) => {    
    this.btnValidation()
    if (Object.values(this.state).every(elem => elem !== "")) {
      event.preventDefault();
      this.setState({submitted: true});
      console.log(this.state.submitted);
      return;
    } 
      event.preventDefault();
      this.setState({submitted: false});
      console.log(this.state.submitted);
    
  }

  btnValidation = () => {
    const { name, cpf, email, estado, checkbox, cidade, edereco, resumo, cargo, descricao } = this.state;
    this.setState({
      name: name.length < 2 ? "" : name,
      cpf: cpf.length !== 11 ? "" : cpf,
      email: email.length < 3 ? "" : email,
    });
  };

  render() {
    const { name, cpf, email, estado, checkbox, cidade, edereco, resumo, cargo, descricao, submitted } = this.state;
    return (
      <div className="padrao">
        <fieldset className="form-control">
          <Name value={name} handleChange={this.handleChange}/>
          <CPF alue={cpf} handleChange={this.handleChange} />  
          <Email value={email} handleChange={this.handleChange} />
          <Estado value={estado} handleChange={this.handleChange} />
          <Cidade value={cidade} handleChange={this.handleChange} />
          <Endereco value={edereco} handleChange={this.handleChange} />
          <Checkbox value={checkbox} handleChange={this.handleChange}/>
          <Radio handleChange={this.handleChange}/>
        </fieldset>
        <fieldset>
          <TextArea resumo={resumo} cargo={cargo} descricao={descricao} handleChange={this.handleChange}/>
        </fieldset>
        <Button clear={this.clearState} handleChange={this.handleChange} />
        {submitted && <ResumForm stateComplete={this.state}/>}
      </div>
    )
  }
}

export default Form;