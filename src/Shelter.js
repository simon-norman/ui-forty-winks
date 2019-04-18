import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './Shelter.css';
import Card from 'react-bootstrap/Card';

class Shelter extends Component {
  render () {
    return (
      <div className='shelter'>
        <div className='shelterInfo'>
          <div className='shelterName'>{this.props.shelter.name}</div>
          <div className='shelterPrice'>£{this.props.shelter.price}</div>
          <div className='shelterDescription'>{this.props.shelter.description}</div>
          <div className='shelterLocation'>{this.props.shelter.location}</div>
        </div>
        <div className='shelterMap'><iframe src={this.props.shelter.mapurl} width="120" height="90" frameborder="0" ></iframe></div>
      </div>
    )
  }
}

export default Shelter;
