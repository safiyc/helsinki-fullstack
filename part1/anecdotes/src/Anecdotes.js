// import React, { useState } from 'react';
const Anecdotes = (props) => {
  return (
    <>
      <h2>Anecdote App</h2>
      <p style={{ height: 50, backgroundColor: 'orange', border: '5px solid orangered', padding: 5 }}>
        {props.randomAnecdote}
      </p>
      <p>
        has {props.votesArray[props.selected]} votes
      </p>
      <div>
        <button onClick={props.handleClickVote}>vote</button>
        <button onClick={props.handleClickRandom}>next anecdote</button>
        <button onClick={props.confirmVotesArray}>print to console</button>
      </div>
      <div>
        <h2>Anecdote with the most votes</h2>
        <p>{props.highestVoted}</p>
      </div>
    </>
  );
};

export default Anecdotes;


// state of anecdote displayed
// state of vote counts for each anecdote
// state of vote counts for displayed anecdote
// state of anecdote with highest vote counts is displayed as anecdote