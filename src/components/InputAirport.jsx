import React from "react";
import { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Row, Col, Container } from "reactstrap";
import GetResult from "./CalculateDistance";

function InputUser(props) {
  const [data, setData] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  useEffect(() => {
    fetch("airports.json").then((airports) => {
      airports.json().then((airports) => {
        setData(airports);
        console.log(airports);
      });
    });
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div style={mystyle}>Airport App</div>
          <Col style={inputcustom} className="wrappercustom" md={6}>
            <label>{"Enter the source"}</label>
            <ReactSearchAutocomplete
              items={data}
              onSelect={(e) => {
                setSource(e);
              }}
              fuseOptions={{ keys: ["airport_name"] }}
              resultStringKeyName={"airport_name"}
              placeholder={"Enter the Source"}
            />
          </Col>

          <Col style={inputcustom} md={6}>
            <label>{"Enter the Destination"}</label>
            <ReactSearchAutocomplete
              items={data}
              onSelect={(e) => {
                setDestination(e);
              }}
              fuseOptions={{ keys: ["airport_name"] }}
              resultStringKeyName={"airport_name"}
              placeholder={"Enter the Destination"}
            />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <GetResult source={source} destination={destination} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const inputcustom = {
  width: "50%",
};

export default InputUser;
