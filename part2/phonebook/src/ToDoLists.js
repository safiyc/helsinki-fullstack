// add item flow: type in input field, click 'add', prompt asks 'today', 'tomorrow', 'cancel', item is added to day
// each item has an id and an order number; order number doesnt track deleted items from lists

import React, { useState, useEffect } from 'react';

//#region styling
// reset all stylings of element, i.e. remove
const unsetStyle = {
  all: 'unset'
};

const styleFlexItems = {
  border: '1px solid black',
  flexGrow: 1
};
const centerText = {
  textAlign: 'center'
};

const styleForm = {
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
  backgroundColor: 'rgb(150,150,200)',
  padding: 10
};
//#endregion


const allItems = [
  {
    "task": "code",
    "status": "Today"
  },
  {
    "task": "oil change",
    "status": "Tomorrow"
  }
]

const ToDoLists = () => {
  const [items, setItems] = useState([allItems]);
  const [newItem, setNewItem] = useState('');
  // const [newItemStatus, setNewItemStatus] = useState('');

  const addItem = (e) => {
    e.preventDefault();

    // grab checked radio status value
    const itemStatus = document.querySelector('input[name="status"]:checked').value;

    const newAdd = {
      "task": newItem,
      "status": itemStatus
    }

    console.log('new item: ', newAdd);
    setItems(items.concat(newAdd));
    console.log('items list: ', items); // will not display new item; behind by one index
  }

  const handleChangeItemName = (e) => {
    console.log(e.target.value);
    setNewItem(e.target.value);
  }

  // const handleChangeItemStatus = (e) => {

  // }

  // initial render of component will display loaded saved items
  useEffect(() => {
    setItems(allItems);
  }, []);

  return (
    <>
      <h2 style={centerText}>ToDo Lists</h2>
      <form style={styleForm} onSubmit={addItem}>
        <div>
          <label>Add Item </label>
          <input value={newItem} onChange={handleChangeItemName} />
        </div>
        <div>
          <label htmlFor='today'>Today</label>
          <input type='radio' name="status" value='Today' id='today' defaultChecked />
          <label htmlFor='today'>Tomorrow</label>
          <input type='radio' name="status" value='Tomorrow' id='tomorrow' />
          <label htmlFor='today'>Soon</label>
          <input type='radio' name="status" value='Soon' id='soon' />
        </div>
        <button type='submit'>add</button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
        <div style={styleFlexItems}>
          <h4 style={centerText}>Today</h4>
          <ul>
            {items.filter(item => item.status === "Today").map(item =>
              <li key={item.task}>{item.task} - {item.status}</li>
            )}
          </ul>
        </div>
        <div style={styleFlexItems}>
          <h4 style={centerText}>Tomorrow</h4>
          <ul>
            {items.filter(item => item.status === 'Tomorrow').map(item =>
              <li key={item.task}>{item.task} - {item.status}</li>
            )}
          </ul>
        </div>
        <div style={styleFlexItems}>
          <h4 style={centerText}>Soon</h4>
          <ul>
            {items.filter(item => item.status === 'Soon').map(item =>
              <li key={item.task}>{item.task} - {item.status}</li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
};

export default ToDoLists;