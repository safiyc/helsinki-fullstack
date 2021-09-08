const List = (props) => {
  const filteredCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.searchValue));

  if (filteredCountries.length === 0 || filteredCountries.length > 10) {
    return (
      <h3>No country to show.</h3>
    )
  }

  if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
    return (
      <div>
        <h3>Please be more specific.</h3>
        <h3>Countries:</h3>
        {
          filteredCountries.map(country =>
            <div key={country.name}>
              <p>{country.name}</p>
            </div>
          )
        }
      </div>
    )
  } else if (filteredCountries.length === 1) {
    return (
      filteredCountries.map(country =>
        <div key={country.name}>
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
          <img src={country.flag} width='200px' />
        </div>
      )
    )
  }
};

export default List;