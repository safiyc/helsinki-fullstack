import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const testCountries = [
    {
      name: 'China',
      color: 'blue',
      id: 1
    },
    {
      name: 'India',
      color: 'orange',
      id: 2
    }
  ];

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const filteredCountries = testCountries.filter(country => country.name.toLowerCase().includes(searchValue));


  const handleSearchValChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    console.log('useEffect before fetch');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled: ', response.data)
        setCountries(response.data);
      });
  }, []);

  const countriesAPI = countries.filter(country => country.name.toLowerCase().includes(searchValue));

  return (
    <div>
      <p>This is a test</p>
      <input value={searchValue} onChange={handleSearchValChange} />
      <p>Filtered List:</p>
      {
        filteredCountries.map(country =>
          <p key={country.id}>{country.name}</p>
        )
      }

      <p>Countries API filtered list:</p>
      {
        countriesAPI.map(country =>
          <p key={country.name}>{country.name}</p>
        )
      }

    </div>
  );
}

export default App;
