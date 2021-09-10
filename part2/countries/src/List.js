import CountryFacts from './CountryFacts';

const List = (props) => {
  const filteredCountries = props.countries.filter(country => country.name.toLowerCase().includes(props.searchValue.toLowerCase()));

  if (props.searchValue === '') {
    return (
      <h4>There is no country to display.</h4>
    );
  } else {
    if (filteredCountries.length > 10) {
      return (
        <h4>Too many countries to list. Please be more specific.</h4>
      )
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
      return (
        <div>
          <h4>Please be more specific.</h4>
          <h3>Countries</h3>
          {
            filteredCountries.map(country =>
              <div key={country.name}>
                <p>
                  {country.name} &nbsp;
                  <button onClick={props.handleShowClick} value={country.name}>show</button>
                </p>
              </div>
            )
          }
        </div>
      )
    } else if (filteredCountries.length === 1) {
      const filteredCountry = filteredCountries[0];
      // console.log('filteredCountry: ', filteredCountry);
      return (
        <CountryFacts filteredCountry={filteredCountry} />
      );
    }
  }

  return <h4>There is no country to display.</h4>
};

export default List;