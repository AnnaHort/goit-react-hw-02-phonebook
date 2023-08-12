import React, { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

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
