import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import parser from 'fast-xml-parser';

import FilterBar from './FilterBar';
import List from './List';

// const api_key = process.env.REACT_APP_API_KEY;

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);
  // const [capitalWeather, setCapitalWeather] = useState({
  //   temperature: '',
  //   wind: '',
  //   wind_direction: '',
  //   description: ''
  // });

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
    // console.log('useEffect for countries before fetch');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log('promise fulfilled: ', response.data);
        setCountries(response.data);
      });
  }, []); // 2nd param empty arr is for useeffect to run only once after initial component render

  // useEffect(() => {
  //   console.log('...useEffect for openweather....');
  //   // fetching xml instead of json bc 
  //   // openweather api contains more useful data in xml
  //   axios
  //     .get(`https://api.openweathermap.org/data/2.5/weather?q=Seattle&units=metric&mode=xml&appid=${api_key}`)
  //     .then(response => {
  //       console.log('weather promise fulfilled, xml: ', response.data);

  //       //#region xml to json
  //       let jsonObj = '';
  //       const parserOptions = {
  //         attributeNamePrefix: '',
  //         ignoreAttributes: false,
  //         parseAttributeValue: true
  //       };
  //       // return an obj in case xml (response.data) is not valid/true
  //       if (parser.validate(response.data) === true) {
  //         jsonObj = parser.parse(response.data, parserOptions);
  //         // console.log('jsonObj: ', jsonObj.current.wind.direction.name);
  //       }
  //       //#endregion

  //       const current = jsonObj.current;
  //       console.log('current: ', current);

  //       // convert initial m/s to mph
  //       const windMPH = (2.23694 * current.wind.speed.value).toFixed(0) + ' mph';
  //       // console.log('windMPH: ', windMPH);
  //       // const temp = current.temperature.value + '&deg;'

  //       setCapitalWeather({
  //         temperature: `${current.temperature.value} ${current.temperature.unit}`,
  //         wind: windMPH,
  //         wind_direction: current.wind.direction.name,
  //         description: current.weather.value
  //       });
  //     });
  // }, []);

  return (
    <div>
      <h1>Countries of the World</h1>
      <FilterBar searchValue={searchValue} handleSearchChange={handleSearchChange} />
      <List searchValue={searchValue} countries={countries} handleShowClick={handleShowClick} />
    </div>
  );
}

export default App;
