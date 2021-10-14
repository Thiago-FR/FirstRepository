import React from 'react';

class Cpf extends React.Component {
  render() {
    const {handleChange, value} = this.props;
    return (
      <div className="input-group mb-3 w-50">
        <label className="input-group-text" htmlFor="cpf">CPF </label>
        <input 
          className="form-control"
          id="cpf" 
          name="cpf"
          type="number" 
          maxLength="11" 
          size="21" 
          autoComplete="off" 
          required 
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Cpf;