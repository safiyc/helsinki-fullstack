const CountryFacts = (props) => {
  return (
    props.filteredCountries.map(country =>
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
        <img src={country.flag} width='200px' alt='flag' />
      </div>
    )
  )
};

export default CountryFacts;