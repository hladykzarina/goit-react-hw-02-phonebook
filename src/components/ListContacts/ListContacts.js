import React from 'react';
import { Component } from 'react';
import { ContactItem } from '../ItemContacts/ItemContacts';
import { ContactListStyled } from './ListContacts.styled';

export class ListContacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <ContactListStyled>
        {contacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
      </ContactListStyled>
    );
  }
}
