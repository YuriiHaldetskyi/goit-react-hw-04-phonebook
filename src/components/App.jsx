import React, { Component } from 'react';
import { Contacts } from './contacts/contacts';
import { Filter } from './filter/filter';
import { Phonebook } from './phonebook/phonebook';
import { MainTitle, SubTitle } from 'GlobalStyled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const localParse = JSON.parse(contacts);
    if (localParse) {
      this.setState({ contacts: localParse });
    }
  }

  addContacts = newContact => {
    const normName = newContact.name.toLowerCase();
    if (
      this.state.contacts.find(({ name }) => name.toLowerCase() === normName)
    ) {
      alert(`${newContact.name} is already in contacts!`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    return true;
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContact();

    return (
      <>
        <MainTitle>Phonebook</MainTitle>
        <Phonebook onSave={this.addContacts} />

        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
