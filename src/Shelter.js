import React, { Component } from 'react';

class Shelter extends Component {
  render () {
    return (
      <div className='shelter'>
        <div className='shelterName'>{this.props.shelter.name}</div>
        <div className='shelterPrice'>{this.props.shelter.price}</div>
      </div>
    )
  }
}

export default Shelter;