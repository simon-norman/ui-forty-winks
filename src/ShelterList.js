import React, { Component } from 'react';
import Shelter from './Shelter';
import shelterApi from './services/shelterApi';

class ShelterList extends Component {
	constructor(props) {
		super(props)
		this.state = { shelters: [] };
  }
  
  componentDidMount = async () => {
    const response = await shelterApi.getShelters();
    this.setState({ shelters: response.shelters })
  }

  render() {
		return (
			<div>
				{ this.state.shelters.map((shelter, i) => {
						return <Shelter key={i} shelter={shelter}/>
					})
				}
			</div>
		)
	}
}

export default ShelterList;