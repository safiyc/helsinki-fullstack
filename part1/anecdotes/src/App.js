import React, { useState } from 'react';

import Anecdotes from './Anecdotes';

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
  // points is arr of vals 0 for all els (length of anecdotes)
  const [votesArray, setVotesArray] = useState([...points]);
  // index of highest voted anecdote
  const [highestVote, setHighestVote] = useState(0);

  //#region test multiple variables in a state
  // votesArray and highestVote states
  const [state, setState] = useState({
    votesArray2: [...points],
    highestVote2: 0
  });
  //#endregion

  // click to render next random anecdote
  const handleClickAnecdotes = () => {
    // random num generator
    const randomNum = Math.floor(Math.random() * anecdotes.length);
    // console.log(randomNum);

    setSelected(randomNum);
    console.log('current anecdote: ', randomNum);
  }

  //#region test handleClickVote
  const handleClickVote2 = () => {
    const votesCopy = [...state.votesArray2];
    votesCopy[selected] += 1;

    // assign highest val
    const highest = votesCopy.reduce((a, b) => Math.max(a, b));
    // assign index of highest val
    const indFirstHighest = votesCopy.findIndex(el => el === highest);

    setState({ votesArray2: votesCopy, highestVote2: indFirstHighest });

    // val is one val behind click
    // console.log('votesArray: ', state.votesArray2);
  }

  // test
  const confirmVotesArray = () => {
    console.log('votesArray: ', state.votesArray2);
  }
  //#endregion

  // click to vote for current displayed anecdote
  const handleClickVote = () => {
    // must copy arr, then set
    const votesCopy = [...votesArray];
    // selected is index of rendered anecdote
    votesCopy[selected] += 1;
    setVotesArray(votesCopy);
    // console.log('initial ', [...points]);
    // console.log('current anecdote ', selected);
    console.log('votes ', votesArray);  // val updated after next click
    console.log('votes[#] ', votesArray[selected]);  // val updated after next click

    displayHighestVote();
  };

  const displayHighestVote = () => {
    // assigns highest val element
    // if [0,1,2,2], will return 2
    const highest = votesArray.reduce((a, b) => Math.max(a, b));

    // index of first el with highest vote counts
    setHighestVote(votesArray.findIndex(el => el === highest));

    console.log('index of highest: ', highestVote);
  };

  return (
    <div>
      <Anecdotes handleClickRandom={handleClickAnecdotes} randomAnecdote={anecdotes[selected]} points={points} selected={selected} handleClickVote={handleClickVote2} votesArray={state.votesArray2} highestVoted={anecdotes[state.highestVote2]} confirmVotesArray={confirmVotesArray} />
    </div>
  );
}

export default App;