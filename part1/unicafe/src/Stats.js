const Stats = (props) => {
  const all = props.good + props.neutral + props.bad;
  // average score is (good: 1, neutral: 0, bad: -1) divided by total
  let avg = (props.good - props.bad) / all;
  let positivePercentage = props.good / all;

  if (isNaN(avg)) {
    avg = 0;
  } else if (avg === 1) {
    avg = avg.toFixed(1);
  }

  if (isNaN(positivePercentage)) {
    positivePercentage = 0;
  } else if (positivePercentage === 1) {
    positivePercentage = 100;
  }

  return (
    <>
      <h2>statistics</h2>
      <ul>
        <li>good <span>{props.good}</span></li>
        <li>neutral <span>{props.neutral}</span></li>
        <li>bad <span>{props.bad}</span></li>
        {/* more stats based above calculations*/}
        <li>all <span>{all}</span></li>
        <li>average <span>{avg}</span></li>
        <li>positive <span>{positivePercentage} &#37;</span></li>
      </ul>
    </>
  );
};

export default Stats;