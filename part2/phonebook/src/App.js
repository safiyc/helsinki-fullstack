import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/styles.css';

import Contacts from './Contacts';
import Form from './Form';
import Filter from './Filter';

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

  const addContact = (e) => {
    e.preventDefault();
    // console.log('e: ', e.target);

    const newPerson = {
      name: newName,
      number: newNumber,
      // id: newName
      // id: persons.length + 1  // not the best way to assign unique id
    };

    // returns undefined if no match is found
    const duplicate = persons.find(person => person.name === newPerson.name);

    if (duplicate === undefined) {
      // alert('this is not a duplicate');
      setPersons(persons.concat(newPerson));  // concat returns a new array
      setNewName('');
      setNewNumber('');
    } else {
      alert(`${newPerson.name} is already added to the phonebook.`);
    }
  };

  const handleNameChange = (e) => {
    console.log('e: ', e.target.value);

    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    console.log('e: ', e.target.value);

    setNewNumber(e.target.value);
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
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled: ', response.data);
        setPersons(response.data);
      });
  }, []);  // '[]' means render only after initial App component render

  return (
    <div>
      <h1>Phonebook</h1>
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
      />
    </div>
  );
};

export default App;
