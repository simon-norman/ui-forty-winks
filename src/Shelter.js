import React, { Component } from 'react';

class Shelter extends Component {
  render () {
    return (
      <div className='shelter'>
        <div className='shelterName'>{this.props.name}</div>
      </div>
    )
  }
}

export default Shelter;