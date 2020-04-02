import React, { Component } from 'react';
import './App.css';
import Contacts from './components/Contacts';

export default class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }

  render () {
    const { contacts } = this.state;
    return <Contacts contacts={contacts} />;
  }
}