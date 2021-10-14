import React from 'react';

class Radio extends React.Component {
  render() {
    const {handleChange} = this.props;
    return (
      <>
      <div className="input-group-text">
        <label className="form-control" htmlFor="radio-casa">Casa: </label>
        <input 
          className="form-check-input"
          id="radio-casa" 
          name="radio"
          type="radio" 
          maxLength="11" 
          size="21" 
          autoComplete="off" 
          required 
          value="Casa"
          onChange={handleChange}
        />
      </div>
      <div className="input-group-text">
        <label className="form-control"   htmlFor="radio-apartamento">Apartamento: </label>
        <input 
          className="form-check-input"
          id="radio-apartamento" 
          name="radio"
          type="radio" 
          maxLength="11" 
          size="21" 
          autoComplete="off" 
          required 
          value="Apartamento"
          onChange={handleChange}
        />
      </div>
      </>
    )
  }
}

export default Radio;