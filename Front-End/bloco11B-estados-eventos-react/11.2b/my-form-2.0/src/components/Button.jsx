import React from 'react';

class Button extends React.Component {
  render() {
    const { clear, handleChange } = this.props;

    return (
      <div className="d-grid gap-2">
        <button name="display" value={'block'} className="btn btn-lg btn-primary submit-button" onClick={handleChange}>Enviar</button>
        <button className="btn btn-lg btn-danger mb-3" onClick={clear}>Limpar</button>
      </div>     
    )
  }
}

export default Button;