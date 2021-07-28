const Statistic = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  );
};

export default Statistic;