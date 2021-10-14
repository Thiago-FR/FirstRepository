import React from 'react';

class Checkbox extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <div className="input-group-text">
        <label className="form-control" htmlFor="checkbox">Checkbox: </label>
        <input className="form-check-input" id="checkbox" name='checkbox' type="checkbox" value={value} onChange={handleChange} />
      </div>
    )
  }
}

export default Checkbox;