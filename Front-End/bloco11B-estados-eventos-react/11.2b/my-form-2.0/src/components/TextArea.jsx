import React from 'react';

class TextArea extends React.Component {
  render() {
    const {handleChange, resumo, cargo, descricao} = this.props;
    return (
      <div className="form-control">
      
        <label className="form-label" htmlFor="resumo">Resumo do currículo: </label>
        <textarea
          className="form-control"
          name="resumo" 
          id="resumo" 
          cols="30" 
          rows="10" 
          maxLength="1000" 
          required
          value={resumo}
          onChange={handleChange}
        />
     
        <label className="form-label" htmlFor="cargo">Cargo: </label>
        <textarea
          className="form-control"
          name="cargo" 
          id="cargo" 
          cols="30" 
          rows="10" 
          maxLength="40" 
          required
          value={cargo}
          onChange={handleChange}
        />
      
        <label className="form-label" htmlFor="descricao">Descrição: </label>
        <textarea
          className="form-control"
          name="descricao" 
          id="descricao" 
          cols="30" 
          rows="10" 
          maxLength="40" 
          required
          value={descricao}
          onChange={handleChange}
        />
      
      </div>
    )
  }
}

export default TextArea;