import React from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { newLogin } from "../redux/actions";

class Login extends React.Component {
  handleChange = ({ target }) => {
    const { dataProps } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });
    dataProps({ [name]: value });
  }

  loginSing = (event) => {
    event.preventDefault();
    const { dataProps } = this.props;
    dataProps({ login: true });
  }

  render() {
    const { nameProps, emailProps, loginProps } = this.props;
    return (
      <div className="App">
        <h1>Login</h1>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Nome" 
            value={ nameProps }
            onChange={ (event) => this.handleChange(event) }
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={ emailProps }
            onChange={ this.handleChange }
          />
          <button onClick={ (event) => this.loginSing(event) }>ENVIAR</button>
          { loginProps && <Navigate to="/clientes-cadastrados" /> }
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  nameProps: state.loginReducer.name,
  emailProps: state.loginReducer.email,
  loginProps: state.loginReducer.login,
});

const mapDispatchToProps = (dispatch) => ({
  dataProps: (value) => dispatch(newLogin(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);