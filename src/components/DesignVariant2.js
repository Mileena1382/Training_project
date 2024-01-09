// DesignVariant1.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
 
const DesignVariant2 = ({ newJoinee }) => {
  const [src, setSrc] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://localhost:8081/newjoinee/images/download/${newJoinee.empId}`,
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        let imageUrl = URL.createObjectURL(response.data);
        setSrc(imageUrl);
        console.log(response.data);
      })
      .catch((error) => {
        setSrc("");
        console.error(error);
      });
  }, [newJoinee.empId]);
  const imageStyle = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px solid ",
    borderRadius: "40%",
   
  };
  return (
    <Container className="resume-container2">
      <h1 className="p-4 " style={{ color: "black" }}>
        <center>Welcome {newJoinee.empName}! </center>
      </h1>
      <Image
        src={src}
        alt={newJoinee.empName}
        // roundedCircle
        width="350px"
        height="300px"
        style={imageStyle}
      />
      <Row>
        {/* Left Column */}
        <Col xs={12} className="right-colum">
          {/* Position */}
          <Col className="second-container">
            <div>
              <b>POSITION:</b>

              <i> {newJoinee.position && newJoinee.position.positionName}</i>
              <img
                src="job2.webp"
                alt="Position Image"
                width="150"
                style={{
                  borderRadius: "20%",
                  marginLeft: "600px",
                  paddingTop: "30px",
                }}
              />
            </div>

            {/* IBU and Manager */}

            <div>
              <b>IBU:</b> <i>{newJoinee.ibu && newJoinee.ibu.ibuName}</i>
              <br />
              <b>MANAGER:</b> <i>{newJoinee.ibu && newJoinee.ibu.ibuManager}</i>
            </div>
          </Col>

          <Col xs={12} className="p-3 px-4">
            <Row className="justify-content-evenly">
              <Col className="second-container col-5 ">
                <div>
                  <b>CORE SKILLS: </b>
                  <br />

                  <i> {newJoinee.empCoreSkills}</i>
                  <img
                    src="skill2.webp"
                    alt="Core Skills Image"
                    width="90"
                    style={{ borderRadius: "50%", marginLeft: "300px" }}
                  />
                  <br />
                </div>
              </Col>
             
              <Col className="second-container col-5 ">
                <div>
                  <b>EDUCATION : </b>
                  <br />
                  <i>{newJoinee.empEducation} </i>{" "}
                  <img
                    src="ed2.webp"
                    alt="Education Image"
                    width="120"
                    style={{ borderRadius: "20%", marginLeft: "300px" }}
                  />
                </div>
              </Col>
            </Row>
          </Col>


        </Col>
      </Row>
      <Col xs={12} className="p-3 px-4">
        <Row className="justify-content-evenly">
          <Col className="second-container col-5 ">
            <div>
              <b>HOMETOWN:</b>
              <br />

              <i> {newJoinee.empHome}</i>
              <img
                src="home2.webp"
                alt="Hometown"
                width="100"
                style={{ borderRadius: "50%", marginLeft: "250px" }}
              />
              <br />
            </div>
          </Col>

          <Col className="second-container col-5 ">
            <div>
              <b>HOBBIES: </b>
              <br />
              <i>{newJoinee.empHobbies} </i>{" "}
              <img
                src="hobbies2.webp"
                alt="Hobbies"
                width="100"
                style={{ borderRadius: "20%", marginLeft: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col xs={12} className="p-3 px-4">
        <Row className="justify-content-evenly">
          <Col className="second-container col-5 ">
            <div>
              <b>YOU CAN CONTACT ME:</b>
              <img
                src="contact2.webp"
                alt="Contact Image"
                width="110"
                style={{ borderRadius: "30%", marginLeft: "300px" }}
              />
              <br />
              <b>EMAIL:</b> <i>{newJoinee.empEmail}</i>
              <br />
              <b>PHONE NUMBER:</b> <i>{newJoinee.empPhone}</i>
              <br />
            </div>
          </Col>

          <Col className="second-container col-5 ">
            <div>
              <b>
              WHAT WOULD I BE IF NOT IN MY CURRENT PROFESSION? 
              </b>
              <img
                src="prof2.webp"
                alt="WWIB Image"
                width="80"
                style={{
                  borderRadius: "30%",
                  marginLeft: "300px",
                  paddingTop: "50px",
                }}
              />
              <br />
              <i>{newJoinee.empWwib}</i>
            </div>
          </Col>
        </Row>
      </Col>

      {/* Quote */}
      <Col className="second-container">
        <div>
          <br />
          <br />

          <br />
          <img
            src="q2.webp"
            alt="Quote Image"
            width="100"
            style={{ borderRadius: "20%", paddingLeft: "10px"}}
          />
          <b>QUOTE THAT FUELS ME:</b>

          <i>"{newJoinee.empQuote}" </i>
          <br />
          <br />

          <br />
        </div>
      </Col>
    </Container>
  );
};

export default DesignVariant2;
