import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './Shelter.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';

class Shelter extends Component {
  render () {
    return (
        <Card className='shelter'>
          <Card.Body className='shelter-info'>
            <Card.Title>{this.props.shelter.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.shelter.description}</Card.Subtitle>
            <Card.Text>£{this.props.shelter.price}</Card.Text>
            <Card.Text>{this.props.shelter.location}</Card.Text>
          </Card.Body>
          <Card.Body className='shelterMap'>
            <Card.Text>
              <div><iframe src={this.props.shelter.mapurl} width="320" height="160" frameborder="0" ></iframe></div>
              </Card.Text>
          </Card.Body>
        </Card>
    )
  }
}

export default Shelter;
