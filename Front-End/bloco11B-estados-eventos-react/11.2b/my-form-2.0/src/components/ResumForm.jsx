import React from "react";

class ResumForm extends React.Component {
  render() {
    const {name, cpf, email, estado, checkbox, cidade, edereco, resumo, cargo, descricao, display } = this.props.stateComplete;
    return(
      <div style={{display: display}}>
        <p className="text-uppercase">Name: {name}</p>
        <p>CPF: {cpf}</p>
        <p>E-Mail: {email}</p>
        <p>Estado: {estado}</p>
        <p>Check: {checkbox}</p>
        <p>Cidade: {cidade}</p>
        <p>Endereço: {edereco}</p>
        <p>Resumo: {resumo}</p>
        <p>Cargo: {cargo}</p>
        <p>Descrição: {descricao}</p>
      </div>
    )
  }
}
export default ResumForm;