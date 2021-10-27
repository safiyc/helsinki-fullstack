const Notification = (props) => {
  const container = {
    border: '1px dotted black',
    margin: '10px auto',
    padding: '5px',
    textAlign: 'center'
  }

  return (
    <>
      <div style={container}>{props.message}</div>
    </>
  )
};

export default Notification;