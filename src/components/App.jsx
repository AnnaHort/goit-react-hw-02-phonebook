import React, { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  addContact  = (newContact) => {
  this.setState(prevState => {
    return {
      contacts: [...prevState.contacts, newContact]
    }
  })
}

  render() {
    return (
      <>
        <GlobalStyle/>
        <h2>Phonebook</h2>
        <QuizForm onAdd={this.addContact }/>
        <h2>Contacts</h2>
        <ul>
          <li>Eden Clements: 645-78-78</li>
          <li>Hermione Kline: 789-45-67</li>
          <li>Rosie Simpson: 498-79-15</li>
        {this.state.contacts.map((contact) => (
            <li key={contact.id}>
              {contact.name}: {contact.contacts}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
