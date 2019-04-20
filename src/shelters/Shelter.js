import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './Shelter.css';
import Card from 'react-bootstrap/Card';

class Shelter extends Component {
  render () {
    return (
        <Card className='shelter'>
          <Card.Body className='shelter-info'>
            <Card.Title className='shelterName'>{this.props.shelter.name}</Card.Title>
            <Card.Subtitle className="shelterDescription">{this.props.shelter.description}</Card.Subtitle>
            <Card.Text className='shelterPrice'>£{this.props.shelter.price}</Card.Text>
            <Card.Text className='shelterLocation'>{this.props.shelter.location}</Card.Text>
          </Card.Body>
          <Card.Body className='shelterMap'>
              <iframe id='iframe' src={this.props.shelter.mapurl} width="250" height="150" frameBorder="0" title={this.props.shelter.name}></iframe>
          </Card.Body>
        </Card>
    )
  }
}

export default Shelter;
