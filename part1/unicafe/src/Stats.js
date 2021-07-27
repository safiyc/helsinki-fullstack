import Statistic from './Statistic';

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

  if (all === 0) {
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h2>statistics</h2>
      <ul>
        <Statistic text='good' value={props.good} />
        <Statistic text='neutral' value={props.neutral} />
        <Statistic text='bad' value={props.bad} />
        {/* more stats based above calculations*/}
        <Statistic text='all' value={all} />
        <Statistic text='avg' value={avg} />
        <Statistic text='positive' value={positivePercentage} />
      </ul>
    </>
  );
};

export default Stats;