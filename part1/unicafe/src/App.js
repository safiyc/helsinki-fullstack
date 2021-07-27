import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Stats from './Stats';

const App = () => {
  // save clicks of each btn to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (e) => {
    // console.log('e: ', e.target.textContent);

    switch (e.target.textContent) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      // 'default' doesnt make sense in this instance bc
      // a button click will trigger handleClick(e);
      //  switch case might not be ideal for this handleClick(e)
      default:
        break;
    }
  }

  return (
    <div>
      <FeedbackOptions handleClick={handleClick} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
