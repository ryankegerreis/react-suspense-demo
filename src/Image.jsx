import logo from './logo.svg';
import React, { Component } from 'react';

export default class Image extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
			dog: ''
		};
	}

	render() {
		return (
			<div>
				{console.log(this.state.dog)}
				<img
					width='400px'
					src='http://www.hdnicewallpapers.com/Walls/Big/Dog/Beautiful_Dog_Puppy_4K_Wallpaper.jpg'
				/>
			</div>
		);
	}
}
