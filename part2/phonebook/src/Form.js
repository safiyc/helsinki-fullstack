import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.addContact}>
      <label>
        name:
        <input value={props.newName} onChange={props.handleName} />
      </label>
      <label>
        number:
        <input type='number' value={props.newNumber} onChange={props.handleNumber} />
      </label>
      <div>
        <button className='button' type='submit'>add</button>
      </div>
    </form>
  )
};

export default Form;