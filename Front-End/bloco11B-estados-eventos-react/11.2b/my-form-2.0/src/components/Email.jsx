import React from 'react';

class Email extends React.Component {
  render() {
    const { handleChange, value} = this.props;
    return (
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="email">Email: </label>
        <input 
          className="form-control"
          id="email"
          name="email"
          type="text" 
          maxLength="50" 
          size="60" 
          autoComplete="off" 
          required 
          value={value}
          onChange={handleChange}
        />
      </div>
    )
  }
}

export default Email;