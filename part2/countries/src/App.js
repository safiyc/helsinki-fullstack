import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterBar from './FilterBar';
import List from './List';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  const handleShowClick = (e) => {
    console.log('clicked "show"');
    console.log('value: ', e.target.value.toLowerCase());

    setSearchValue(e.target.value);  // lowercase to compare w/str of filteredCountries
  };

  useEffect(() => {
    console.log('useEffect before fetch');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled: ', response.data)
        setCountries(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Countries of the World</h1>
      <FilterBar searchValue={searchValue} handleSearchChange={handleSearchChange} />
      <List searchValue={searchValue} countries={countries} handleShowClick={handleShowClick} />
    </div>
  );
}

export default App;
