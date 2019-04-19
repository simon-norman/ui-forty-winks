import React, { Component } from 'react';
import Shelter from './Shelter';
import shelterApi from '.././services/shelterApi';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route } from 'react-router-dom';
import Iframe from 'react-iframe';
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

  render() {
		return (
			<div className="shelter-list-container">
					{ this.state.shelters.map((shelter, i) => {
							return <Shelter key={i} shelter={shelter}/>
						})
					}

				<div>
					<Button onClick={this.redirectToTarget} variant="contained" color="primary" className="purchase-button">
							Buy voucher
					</Button>
				</div>
			</div>
		)
	}
}

export default ShelterList;
