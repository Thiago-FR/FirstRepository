import React from 'react';

class Name extends React.Component {
    render() {
    const {handleChange, value} = this.props;
    return (
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="name">Name </label>
        <input
          className="form-control text-uppercase"
          id="name"
          name="name"
          value={value}
          type="text" 
          maxLength="40" 
          size="50" 
          autoComplete="off" 
          required 
          onChange={handleChange}
        />
         <div>
           {}
         </div>
      </div>
     
    )
  }
}

export default Name;