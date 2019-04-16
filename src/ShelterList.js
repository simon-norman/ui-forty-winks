import React, { Component } from 'react';
import Shelter from './Shelter';

class ShelterList extends Component {
	constructor(props) {
		super(props)
		this.state = { shelters: [1,2] };
	}

  render() {
		return (
			<div>
				{ this.state.shelters.map((shelter, i) => {
						return <Shelter key={i}/>
					})
				}
			</div>
		)
	}
}

export default ShelterList;