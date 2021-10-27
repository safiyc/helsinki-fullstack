import React from 'react';

const Form = (props) => {
  return (
    <form className='form' onSubmit={props.addContact}>
      <label>
        name:
        <input value={props.newName} onChange={props.handleName} required />
      </label>
      <label>
        number:
        <input value={props.newNumber} onChange={props.handleNumber} required />
      </label>
      <div>
        <button className='button' type='submit'>add</button>
      </div>
    </form>
  )
};

export default Form;