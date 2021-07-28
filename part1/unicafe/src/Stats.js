import Statistic from './Statistic';

const Stats = (props) => {
  const all = props.good + props.neutral + props.bad;
  // average score is (good: 1, neutral: 0, bad: -1) divided by total
  let average = (props.good - props.bad) / all;
  let positivePercentage = props.good / all;

  if (isNaN(average)) {
    average = 0;
  } else if (average === 1) {
    average = average.toFixed(1);
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
      <table>
        <tbody>
          <tr>
            <Statistic text='good' value={props.good} />
          </tr>
          <tr>
            <Statistic text='neutral' value={props.neutral} />
          </tr>
          <tr>
            <Statistic text='bad' value={props.bad} />
          </tr>
          <tr>
            <Statistic text='all' value={all} />
          </tr>
          <tr>
            <Statistic text='average' value={average} />
          </tr>
          <tr>
            <Statistic text='positive' value={positivePercentage} />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Stats;