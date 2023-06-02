import { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
  }

  saveContact = item => {
    this.state.contacts.push(item)
    console.log("app- item", this.state.contacts );
    this.setState({ contacts: this.state.contacts })
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.saveContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
      </div>
    )
  }
}