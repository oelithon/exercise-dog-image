import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageDog: '',
    };

    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const dogAPI = await fetch('https://dog.ceo/api/breeds/image/random');
    const dogAPIJson = await dogAPI.json();
    this.setState({
      imageDog: dogAPIJson,
    });
  }

  render() {
    const { imageDog: { message } } = this.state;
    return (
      <div>
        <h1>Dog Image Ramdon</h1>
        <img src={ message } alt="imagem de cachorros" />
      </div>
    );
  }
}

export default App;
