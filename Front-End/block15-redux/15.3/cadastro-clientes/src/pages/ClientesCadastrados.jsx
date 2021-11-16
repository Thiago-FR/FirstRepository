import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ClientesCadastrados extends React.Component {
  removeClient = (client, index) => {
    const removeClient = document.getElementById(`${client.name}-${index}`);
    removeClient.remove();
  }

  render() {
    const { loginProps, listClient } = this.props;
    return (
      <div className="App">
        <h1>Clientes Cadastrados</h1>
        {
          loginProps
          ? <div>
              <Link to="/cadastro">CADASTRO DE CLIENTES</Link>
              { listClient.map((client, index) => {
                return (
                  <div id={`${client.name}-${index}`} key={`${client.name}-${index}`}>
                    <p>{ client.name }</p>
                    <p>{ client.email }</p>
                    <p>{ client.idade }</p>
                    <button onClick={ () => this.removeClient(client, index) }>X</button>
                  </div>
                )
              })}
            </div>
          : <p>Login não efetuado</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginProps: state.loginReducer.login,
  listClient: state.cadastroReducer,
});

export default connect(mapStateToProps)(ClientesCadastrados);