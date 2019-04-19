import React, { Component } from 'react';
import Shelter from './Shelter';
import shelterApi from './services/shelterApi';
import Button from '@material-ui/core/Button';

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
			<div>
				<div>
					<Button onClick={this.redirectToTarget} variant="contained" color="primary" className="purchase-button">
							Buy a voucher
					</Button>
				</div>
				<div>
					{ this.state.shelters.map((shelter, i) => {
							return <Shelter key={i} shelter={shelter}/>
						})
					}
				</div>
			</div>
		)
	}
}

export default ShelterList;
