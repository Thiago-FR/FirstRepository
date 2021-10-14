import React from 'react';

class Cidade extends React.Component {
  render() {
    const {handleChange, value} = this.props;
    return (
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="cidade">Cidade: </label>
        <input 
          className="form-control"
          id="cidade" 
          name="cidade"
          type="text" 
          maxLength="28" 
          size="38" 
          autoComplete="off" 
          required 
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Cidade;