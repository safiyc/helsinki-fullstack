const Stats = (props) => {
  return (
    <>
      <h2>statistics</h2>
      <ul>
        <li>good <span>{props.good}</span></li>
        <li>neutral <span>{props.neutral}</span></li>
        <li>bad <span>{props.bad}</span></li>
      </ul>
    </>
  );
};

export default Stats;