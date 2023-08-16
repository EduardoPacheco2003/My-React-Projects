/* eslint-disable react/prop-types */
const styles = {
  gridColumn: "1 / -1",
  gridRow: "1 / -1",
  textAlign: "center",
};
const Error = ({ error }) => {
  const { status, statusText } = error;
  return (
    <div style={styles}>
      <h3>{status}</h3>
      <h4>{statusText} </h4>
    </div>
  );
};

export default Error;
