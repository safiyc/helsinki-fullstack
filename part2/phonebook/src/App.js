import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import './styles/styles.css';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';
import Notification from './Notification';
import * as contactService from './services/contacts';  // 'contactService' is name I'm giving here for the exported object from '../contacts.js'
import ToDoLists from './ToDoLists';

// sample for db.json
// {
//   "persons": [
//     {
//       "name": "SC",
//       "number": "000-000-0000",
//       "id": 1
//     }
//   ]
// }

const App = () => {
  // const [persons, setPersons] = useState([
  //   {
  //     name: 'Arto Hellas',
  //     number: '555-555-5555'
  //   },
  //   {
  //     name: 'Ada Lovelace',
  //     number: '39-44-5323523'
  //   }
  // ]);

  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterMode, setFilterMode] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const [notificationMsg, setNotificationMsg] = useState('Welcome');

  const addContact = (e) => {
    e.preventDefault();
    // console.log('e: ', e.target);

    // remove spaces from phone number
    let formattedPhoneNumber = newNumber.replace(/\s/g, '');

    // replace repeat dashes with single dash from phone number
    formattedPhoneNumber = formattedPhoneNumber.replace(/(-)\1+/g, '-');

    // remove dashes from beginning and end
    formattedPhoneNumber = formattedPhoneNumber.replace(/(^-|-$)/g, '');

    const newPerson = {
      name: newName,
      number: formattedPhoneNumber,
      // currently with json-server, which auto creates id
      // id: newName
      // id: persons.length + 1  // not the best way to assign unique id
    };

    // returns undefined if no match is found
    const duplicate = persons.find(person => person.name === newPerson.name);

    if (duplicate === undefined) {
      // alert('this is not a duplicate');

      // test to confirm console log doesnt include newewst entry in arr:
      // setPersons(persons.concat(newPerson));
      // console.log('persons list: ', persons);

      // axios
      // .post('http://localhost:3001/persons', newPerson)
      contactService.addContact(newPerson).then(newContact => {
        setPersons(persons.concat(newContact));  // concat returns a new array
        setNewName('');
        setNewNumber('');
        // test to confirm console log doesnt include newewst entry in arr:
        // console.log('persons list, after person to server & client: ', persons);

        setNotificationMsg('Contact has been successfully added');
        // after 3s, change notification to 'Welcome'
        setTimeout(() => {
          setNotificationMsg('Welcome');
        }, 3000);
      });
    } else {
      // alert(`${newPerson.name} is already added to the phonebook.`);

      // if person exists, but number is different, then ask to confirm if updating number
      updateContactNumber(duplicate, newPerson);
      setNotificationMsg('Contact has been successfully updated');
      // after 3s, change notification to 'Welcome'
      setTimeout(() => {
        setNotificationMsg('Welcome');
      }, 3000);
    }
  };

  const updateContactNumber = (contact, updated) => {
    const confirmUpdate = window.confirm('update phone number?');

    if (confirmUpdate) {
      contactService.updatePhone(contact, updated)
        .then(response => {
          // console.log('number updated: ', updated);

          // set contact to person from persons state if ids dont match, else
          // set contact to updated contact from db (response.data)
          setPersons(persons.map(person => person.id !== contact.id ? person : response.data));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const deletePerson = (id) => {
    const contact = persons.find(person => person.id === id);
    console.log('to be deleted: ', contact, id);

    // ask user to confirm after clicking on delete btn
    const confirmDeleteContact = window.confirm(`delete ${contact.name}?`);  // clicking 'okay' returns true

    if (confirmDeleteContact) {
      // remove contact from db
      contactService.deleteContact(contact.id).then(() => {
        console.log(`${contact.name} is deleted`);

        // remove contact from clientside state
        const updatedList = persons.filter(person => person.id !== contact.id)
        console.log('updatedList: ', updatedList);
        setPersons(updatedList);

        setNotificationMsg(`${contact.name} was deleted successfully.`);
        setTimeout(() => {
          setNotificationMsg('Welcome');
        }, 3000);
      }).catch(err => {
        setNotificationMsg(`${contact.name} has already been deleted from the server.`);
        setTimeout(() => {
          setNotificationMsg('Welcome');
        }, 3000);
      });
    };
  }

  const handleNameChange = (e) => {
    // console.log('e: ', e.target.value);

    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    // console.log('e: ', e.target.value);

    // regex for numbers, dashes, whitespaces, empty string
    // unresolved bug: cant delete first typed num
    // '^$' = empty str (this allows deleting phone# to blank input val)
    const checkNumDashes = /^[0-9- ]+$|^$/;

    // set number field only if inpyting numbers and dashes
    if (checkNumDashes.test(e.target.value)) {
      setNewNumber(e.target.value);
    } else {
      console.log("Please only numbers and dashes");
      alert('Please only numbers and dashes');
    }
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);

    if (e.target.value !== '') {
      setFilterMode(true);
    } else {
      setFilterMode(false);
    }
  };

  useEffect(() => {
    console.log('...useEffect...');
    // axios.get(...).then(...)
    // axios
    //   .get('http://localhost:3001/persons')
    //   .then(response => {
    //     console.log('promise fulfilled: ', response.data);
    //     setPersons(response.data);
    //   });
    contactService.getContacts().then(allContacts => setPersons(allContacts));
  }, []);  // '[]' means render only after initial App component render

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationMsg} />
      <Filter
        filterValue={filterValue}
        handleChange={handleFilterChange}
      />
      <h2>Add A New Contact</h2>
      <Form
        addContact={addContact}
        newName={newName}
        newNumber={newNumber}
        handleName={handleNameChange}
        handleNumber={handleNumberChange}
      />

      {/* list of contacts */}
      <h2>Numbers</h2>
      <Contacts
        filterMode={filterMode}
        filterValue={filterValue}
        persons={persons}
        deletePerson={deletePerson}
      />
      <br />
      <br />
      <br />
      <hr />
      <ToDoLists />
    </div>
  );
};

export default App;
