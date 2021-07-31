import Button from './Button';

const FeedbackOptions = (props) => {
  return (
    <>
      <h2>Give Feeback App</h2>
      {/* <button onClick={props.handleClick}>good</button>
      <button onClick={props.handleClick}>neutral</button>
      <button onClick={props.handleClick}>bad</button> */}
      <Button handleClick={props.handleClick} text='good' />
      <Button handleClick={props.handleClick} text='neutral' />
      <Button handleClick={props.handleClick} text='bad' />
    </>
  );
};

export default FeedbackOptions;