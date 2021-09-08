/* react17 and up no longer need to import react, unless explicitly using React, ex: class Test extends React.Component {} 
*/
// import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />, document.getElementById('root')
);
