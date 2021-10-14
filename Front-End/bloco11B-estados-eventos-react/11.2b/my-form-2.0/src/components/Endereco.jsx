import React from 'react';

class Endereco extends React.Component {
  render() {
    const {handleChange, value} = this.props;
    return (
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="endereco">Endereco: </label>
        <input 
          className="form-control"
          id="endereco" 
          name="endereco"
          type="text" 
          maxLength="200" 
          size="205" 
          autoComplete="off" 
          required 
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Endereco;