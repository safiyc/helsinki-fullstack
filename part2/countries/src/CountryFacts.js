import React, { useState, useEffect } from 'react';
import axios from 'axios';
import parser from 'fast-xml-parser';

const api_key = process.env.REACT_APP_API_KEY;

const CountryFacts = (props) => {
  const country = props.filteredCountry;
  const [capitalWeather, setCapitalWeather] = useState({
    temperature: '',
    wind: '',
    wind_direction: '',
    description: ''
  });


  useEffect(() => {
    console.log('...useEffect for openweather....');
    // console.log('country: ', country);

    // fetching xml instead of json bc 
    // openweather api contains more useful data in xml
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&mode=xml&appid=${api_key}`)
      .then(response => {
        // console.log('weather promise fulfilled, xml: ', response.data);

        //#region xml to json
        let jsonObj = '';
        const parserOptions = {
          attributeNamePrefix: '',
          ignoreAttributes: false,
          parseAttributeValue: true
        };
        // return an obj in case xml (response.data) is not valid/true
        if (parser.validate(response.data) === true) {
          jsonObj = parser.parse(response.data, parserOptions);
          // console.log('jsonObj: ', jsonObj.current.wind.direction.name);
        }
        //#endregion

        const current = jsonObj.current;
        console.log('current: ', current);

        // convert initial m/s to mph
        const windMPH = (2.23694 * current.wind.speed.value).toFixed(0) + ' mph';
        // console.log('windMPH: ', windMPH);

        setCapitalWeather({
          temperature: `${current.temperature.value} ${current.temperature.unit}`,
          wind: windMPH,
          wind_direction: current.wind.direction.name.toLowerCase(),
          description: current.weather.value
        });
      });
  }, []);

  return (
    <div style={{ backgroundColor: 'lightgrey', padding: '10px' }}>
      <h3>Country</h3>
      <p>{country.name}</p>
      <h3>Capital</h3>
      <p>{country.capital}</p>
      <h3>Population</h3>
      <p>{country.population}</p>
      <h3>Languages</h3>
      {
        country.languages.map(lang =>
          <p key={lang.name}>{lang.name}</p>
        )
      }
      <h3>Flag</h3>
      <img src={country.flag} width='200px' alt='flag' />
      <div>
        <h3>Weather in {country.capital}</h3>
        <h4>Temperature</h4>
        <p>{capitalWeather.temperature}</p>
        <h4>Wind</h4>
        <p>{capitalWeather.wind} &nbsp; {capitalWeather.wind_direction}</p>
        <h4>Description</h4>
        <p>{capitalWeather.description}</p>
      </div>
    </div>
  )
};

export default CountryFacts;