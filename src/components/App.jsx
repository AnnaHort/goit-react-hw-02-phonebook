import React, { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', contacts: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', contacts: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', contacts: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', contacts: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <>
        <GlobalStyle />
        <h2>Phonebook</h2>
        <QuizForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.contacts}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
