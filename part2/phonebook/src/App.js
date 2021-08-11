import React, { useState } from 'react';

const Contacts = (props) => {
  if (props.filterMode === true) {
    // new array of elements that includes any portion of filterValue string
    const filtered = props.persons.filter(person =>
      person.name.toLowerCase().includes(props.filterValue))

    // if filtered returned an empty array
    if (filtered.length === 0) {
      return (
        <>
          <p>There are no matches for this filter.</p>
        </>
      )
    }
    // if filtered returned an array with elements, map the array to p tags
    return (
      <>
        {filtered.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </>
    )
  } else {
    return (
      <>
        {props.persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </>
    )
  }
};

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '555-555-5555'
    },
    {
      name: 'Ada Lovelace',
      number: '39-44-5323523'
    }
  ]);

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
  }

  const handleNumberChange = (e) => {
    console.log('e: ', e.target.value);

    setNewNumber(e.target.value);
  }

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);

    if (e.target.value !== '') {
      setFilterMode(true);
    } else {
      setFilterMode(false);
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        filter by name: <input value={filterValue} onChange={handleFilterChange} />
      </div>
      <h2>Add A New Contact</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input type='number' value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      {/* list of contacts */}
      <h2>Numbers</h2>
      <Contacts filterMode={filterMode} filterValue={filterValue} persons={persons} />
      {/* <div>
        {persons.map(personObj =>
          <p key={personObj.name}>{personObj.name} {personObj.number}</p>
        )}
      </div> */}
    </div>
  );
}

export default App;
