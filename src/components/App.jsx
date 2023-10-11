import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import Form from './Form/Form';
import { Section } from './Section/Section';
import { ListContacts } from './ListContacts/ListContacts';
import { Element } from './ListContacts/ListContacts.styled';
import Filter from './FilterForm/FilterForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const identicalContactName = this.state.contacts.some(
      ({ name }) => data.name === name
    );
    if (identicalContactName) {
      return (
        Report.warning('WARNING'), `${data.name} is already in contacts`, 'ok'
      );
    }

    const contact = {
      ...data,
      id: nanoid(),
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <h2>Phonebook</h2>
        <Form onSubmit={this.addContact} />
        <Filter value={filter} />
        {visibleContacts.length ? (
          <ListContacts
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
          />
        ) : (
          <Element>Not found</Element>
        )}
      </Section>
    );
  }
}