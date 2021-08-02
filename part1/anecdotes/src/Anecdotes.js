const Anecdotes = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p style={{ height: 50, border: '6px solid black', padding: 5 }} >
        {props.anecdote}
      </p>
    </>
  );
};

export default Anecdotes;