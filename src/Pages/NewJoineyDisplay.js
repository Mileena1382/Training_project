import React from "react";
import DisplayNewJoinee from "../components/DisplayNewJoinee";
import axios from "axios";
import { Row, Col, ListGroup, Card, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const NewJoineyDisplay = () => {
  const [newJoinees, setNewJoinnes] = useState([]);
  const [newJoineeId, setNewJoineeId] = useState(-1);
  const [variant, setVariant] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.value);
    setVariant(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/newjoinee/")
      .then((response) => setNewJoinnes(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ display: "flex", overflowX: "hidden" }}>
      {/* Left Container */}
      <div
        style={{
          flex: " 0 300px",
          backgroundColor: "black",
          padding: "20px",
          overflowX: "hidden",
        }}
      >
        <h2 style={{ color: "white" }}>View New Joinee</h2>
        <Row className="h-100">
          <ListGroup as="ol">
            {newJoinees.map((newJoinee) => (
              <ListGroup.Item
                key={newJoinee.empId}
                as="li"
                className="text-center fw-bold m-2  text-secondary"
                onClick={() => setNewJoineeId(parseInt(newJoinee.empId))}
              >
                Employee Id:{newJoinee.empId} <br />
                Employee Name: {newJoinee.empName}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </div>
      {/* Right Container */}
      <div style={{ flex: "1", padding: "20px", overflowX: "hidden" }}>
        <Card>
          <Card.Body>
            <Form className="top-0  p-3 mt-3 mb-5">
              <Form.Select aria-label="select theme" onChange={handleChange}>
                <option value="0">Select the theme</option>
                <option value="1">Theme 1</option>
                <option value="2">Theme 2</option>
                {/* <option value="3">Theme 3</option> */}
              </Form.Select>
            </Form>
            <DisplayNewJoinee newJoineeId={newJoineeId} variant={variant} />
          </Card.Body>
        </Card>
      </div>
      //{" "}
    </div>
  );
};
