import React from 'react';

const Filter = (props) => {
  return (
    <div>
      filter by name: <input value={props.filterValue} onChange={props.handleChange} />
    </div>
  )
};

export default Filter;