import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { newCadastro } from '../redux/actions'

const INITIAL_STATE = ({
  name: '',
  email: '',
  idade: '',
});

class Cadastro extends React.Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  loginSing = (event) => {
    const { addCadastro } = this.props;
    const { name, email, idade } = this.state;
    event.preventDefault();
    addCadastro({ name, email, idade });
    this.setState(INITIAL_STATE);
  }
  render() {
    const { name, email, idade } = this.state;
    const { loginProps } = this.props;
    return (
      <div className="App">
        <h1>Cadastro</h1>
        {
          loginProps
          ? <form action="">
          <input
            type="text"
            name="name"
            placeholder="Nome" 
            value={ name }
            onChange={ (event) => this.handleChange(event) }
          />
          <input
            type="number"
            name="idade"
            placeholder="Idade"
            value={ idade }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            placeholder="Email" 
            value={ email }
            onChange={ (event) => this.handleChange(event) }
          />
          <button onClick={ (event) => this.loginSing(event) }>ENVIAR</button>
          <Link to="/clientes-cadastrados">CLIENTES CADASTRADOS</Link>
        </form>
        : <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginProps: state.loginReducer.login,
});

const mapDispatchToProps = (dispatch) => ({
  addCadastro: (value) => dispatch(newCadastro(value)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);