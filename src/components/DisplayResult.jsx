const DisplayResult = ({ distance, source, destination }) => {
  return (
    <h3>
      The distance between {source.airport_name} and {destination.airport_name}{" "}
      is {distance}
    </h3>
  );
};

export default DisplayResult;
