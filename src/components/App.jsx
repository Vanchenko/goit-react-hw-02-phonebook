import { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { ContactFind } from './ContactFind/ContactFind';

export class App extends Component {
  state = {
    contacts: [],
    filter:'',
  }

  saveContact = item => {
    this.state.contacts.find(elem =>
      console.log('find method', elem.name)
    )
    console.log('item-', item)
    console.log('clg in savecont', this.state.contacts.map(elem => elem.name))
      
    if (this.state.contacts.find(elem => elem.name === item.name)) {
      alert(`${item.name} is already in contacts.`)
    } else {
      this.state.contacts.push(item)
      this.setState({ contacts: this.state.contacts })
    }
  };

  findChange = evt => {
    this.setState({ filter: evt.currentTarget.value })
  };

  deleteItem = id => {
    const idContact = this.state.contacts.findIndex(contact => contact.id === id);
    this.setState({ contact: this.state.contacts.splice(idContact, 1) })
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.saveContact} />
        <h2>Contacts</h2>
        <ContactFind find={filter} findChange={this.findChange} />
        <ContactList contacts={filteredContacts} deleteItem={this.deleteItem} />
      </div>
    )
  }
}