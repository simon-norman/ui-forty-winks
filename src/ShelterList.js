import React, { Component } from 'react';
import Shelter from './Shelter';
import shelterApi from './services/shelterApi';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route } from 'react-router-dom';

class ShelterList extends Component {
	constructor(props) {
		super(props)
		this.state = { shelters: [] };
  }

  componentDidMount = async () => {
    const shelters = await shelterApi.getShelters();
    this.setState({ shelters })
  }

	redirectToTarget = () => {
	 this.props.history.push('/buy-voucher')
 }

  render() {
		return (
			<div>
				<Button onClick={this.redirectToTarget} variant="contained" color="primary" className="purchase-button">
					Buy a voucher
				</Button>
					{ this.state.shelters.map((shelter, i) => {
							return <Shelter key={i} shelter={shelter}/>
						})
					}

			</div>
		)
	}
}

export default ShelterList;
