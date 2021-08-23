import React from 'react';

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

export default Contacts;