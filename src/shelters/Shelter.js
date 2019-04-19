import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './Shelter.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardGroup from 'react-bootstrap/CardGroup';

class Shelter extends Component {
  render () {
    return (
      // <div className='shelter'>
      //   <div className='shelterInfo'>
      //     <div className='shelterName'>{this.props.shelter.name}</div>
      //     <div className='shelterPrice'>£{this.props.shelter.price}</div>
      //     <div className='shelterDescription'>{this.props.shelter.description}</div>
      //     <div className='shelterLocation'>{this.props.shelter.location}</div>
      //   </div>
      //   <div className='shelterMap'><iframe src={this.props.shelter.mapurl} width="120" height="90" frameborder="0" ></iframe></div>
      // <div>
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
//         <CardColumns>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title that wraps to a new line</Card.Title>
//       <Card.Text>
//         This is a longer card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Card className="p-3">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px160" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card bg="primary" text="white" className="text-center p-3">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card className="text-center">
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//       <Card.Text>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Card>
//     <Card.Img src="holder.js/100px160" />
//   </Card>
//   <Card className="text-right">
//     <blockquote className="blockquote mb-0 card-body">
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
//         erat a ante.
//       </p>
//       <footer className="blockquote-footer">
//         <small className="text-muted">
//           Someone famous in <cite title="Source Title">Source Title</cite>
//         </small>
//       </footer>
//     </blockquote>
//   </Card>
//   <Card>
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//       <Card.Text>
//         <small className="text-muted">Last updated 3 mins ago</small>
//       </Card.Text>
//     </Card.Body>
//   </Card>
// </CardColumns>
    // </div>
    // </div>
    )
  }
}

export default Shelter;
