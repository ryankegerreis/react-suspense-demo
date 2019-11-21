import React, { Component } from 'react';
import axios from 'axios';

export default class Image extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			dog: ''
		};

		this.fetchDog = this.fetchDog.bind(this);
	}

	fetchDog() {
		axios.get('https://dog.ceo/api/breeds/image/random').then(res =>
			this.setState({
				dog: res.data.message
			})
		);
	}

	componentDidMount() {
		this.fetchDog();
	}

	render() {
		return (
			<div>
				<img width='400px' src={this.state.dog} />
			</div>
		);
	}
}
