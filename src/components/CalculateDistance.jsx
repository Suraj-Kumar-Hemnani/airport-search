import { useState } from "react";
import { Button } from "reactstrap";
import DisplayResult from "./DisplayResult";

const GetResult = ({ source, destination }) => {
  const [distance, setDistance] = useState(0);
  const resultdata = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1bc09ab8f3msh631a3c7cbd8419fp1a7da1jsne1c50a21b9f3",
        "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com",
      },
    };

    fetch(
      `https://aerodatabox.p.rapidapi.com/airports/iata/${source.iata_code}/distance-time/${destination.iata_code}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setDistance(response.greatCircleDistance.nm);
        // console.log(response.greatCircleDistance.nm);
      })

      .catch((err) => console.error(err));
  };

  return (
    <>
      <Button color="primary" className="my-3" onClick={resultdata}>
        Result
      </Button>
      {distance > 0 && (
        <DisplayResult
          distance={distance}
          source={source}
          destination={destination}
        ></DisplayResult>
      )}
    </>
  );
};

export default GetResult;
