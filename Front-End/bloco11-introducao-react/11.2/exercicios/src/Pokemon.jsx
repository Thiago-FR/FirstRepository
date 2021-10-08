import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {name, type, weight, measurementUnit, img} = this.props;
    return (
      <div className='info-poke' key={name}>
        <div className='info-poke-content'>
          <p>{name}</p>
          <p>{type}</p>
          <p>{weight} {measurementUnit}</p>
        </div>
        <img src={img} alt="Img Pokemon" />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  weight: PropTypes.string,
  measurementUnit: PropTypes.string,
  img: PropTypes.string,
};

Pokemon.defaultProps = {
  type: '',
  weight: '',
  measurementUnit: '',
  img: '',
};

export default Pokemon;