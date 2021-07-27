const Statistic = (props) => {
  return (
    <li>
      {props.text} {props.value}
    </li>
  );
};

export default Statistic;