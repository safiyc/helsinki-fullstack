import React, { useState } from 'react';

import Anecdotes from './Anecdotes';

import Button from './Button';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];

  // 'points' to be used for anecdote vote counts
  const points = [];
  for (let i = 0; i < anecdotes.length; i++) {
    points.push(0);
    // console.log(points);
  }

  // index of displayed anecdote
  const [selected, setSelected] = useState(0);
  const [state, setState] = useState({
    votesArray: [...points],
    highestVote: 0
  });

  // click to render next random anecdote
  const handleClickAnecdotes = () => {
    // random num generator
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    // console.log(randomNum);

    setSelected(randomNum);
    console.log('current anecdote: ', randomNum);
  }

  // click to vote on displayed anecdote
  const handleClickVote = () => {
    // cant directly work on votesArray, so copied
    const votesCopy = [...state.votesArray];
    votesCopy[selected] += 1;

    // assign highest val
    const highest = votesCopy.reduce((a, b) => Math.max(a, b));
    // assign index of highest val
    const indFirstHighest = votesCopy.findIndex(el => el === highest);

    setState({ votesArray: votesCopy, highestVote: indFirstHighest });
  }

  // console.log test
  const confirmVotesArray = () => {
    console.log('votesArray: ', state.votesArray);
  }

  return (
    <div>
      <Anecdotes anecdote={anecdotes[selected]} heading='Anecdote App' />
      <p>
        has {state.votesArray[selected]} votes
      </p>
      <div>
        <Button handleClick={handleClickVote} text='vote' />
        <Button handleClick={handleClickAnecdotes} text='next anecdote' />
        <Button handleClick={confirmVotesArray} text='print to console' />
      </div>
      <Anecdotes anecdote={anecdotes[state.highestVote]} heading='Anecdote With The Most Votes' />
    </div>
  );
}

export default App;