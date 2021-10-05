import React from 'react';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='info-poke'>
        <div className='info-poke-content'>
          <p>{this.props.name}</p>
          <p>{this.props.type}</p>
          <p>{this.props.weight} {this.props.measurementUnit}</p>
        </div>
        <img src={this.props.img} alt="Img Pokemon" />
      </div>
    );
  }
}

export default Pokemon;