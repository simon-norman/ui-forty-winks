import React, { Component } from 'react';
import './Shelter.css';

class Shelter extends Component {
  render () {
    return (
      <div className='shelter'>
        <div className='shelterName'>{this.props.shelter.name}</div>
        <div className='shelterPrice'>£{this.props.shelter.price}</div>
        <div className='shelterDescription'>{this.props.shelter.description}</div>
        <div className='shelterLocation'>{this.props.shelter.location}</div>
      </div>
    )
  }
}

export default Shelter;