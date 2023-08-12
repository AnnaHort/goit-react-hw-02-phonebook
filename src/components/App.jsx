import React, { Component } from 'react';
import { QuizForm } from './QuizForm/QuizForm';
import { GlobalStyle } from './GlobalStyle';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', contacts: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', contacts: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', contacts: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', contacts: '227-91-26' },
    ],
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
    if (this.existContact(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

 existContact = newContactName => {
    return this.state.contacts.some(
      contact =>
        contact.name.toLocaleLowerCase() === newContactName.toLocaleLowerCase()
    );
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <QuizForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        <ContactList contact={visibleContacts} />
      </div>
    );
  }
}
