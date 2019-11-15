import logo from './logo.svg';
import React, { Component } from 'react'

export default class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      dog: ''
    }
  }

  componentDidMount() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(res => console.log(res.message))
      .then(res => this.setState({ loaded: true, dog: res.message }))
  }

  render() {
    return (
      <div>
        {console.log(this.state.dog)}
        <img src={this.state.dog === undefined || '' ? 'https://www.bing.com/th?id=OIP.MX3BTxrVCObd1RhM8oY-aAHaLJ&pid=Api&rs=1' : this.state.dog} className="App-logo" alt="logo" />
      </div>
    )
  }
}
