import React, { Component } from 'react';
import Shelter from './Shelter';
import shelterApi from '.././services/shelterApi';
import Button from '@material-ui/core/Button';
import './ShelterList.css';

class ShelterList extends Component {
	constructor(props) {
		super(props)
		this.state = { shelters: [] };
  }

  componentDidMount = async () => {
		const response = await shelterApi.getShelters();
    this.setState({ shelters: response.shelters })
  }

	redirectToTarget = () => {
		this.props.history.push('/vouchers')
	}

 	createShelterComponents = () => {
		return this.state.shelters.map((shelter, index) => {
			return <Shelter key={index} shelter={shelter}/>
		})
 	}

  render() {
		return (
			<div className="shelter-list-container">
				<div>{this.createShelterComponents()}</div>
			</div>
		)
	}
}

export default ShelterList;
