import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

const DesignVariant1 = ({ newJoinee }) => {
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
    <Container className="resume-container1">
      <h1 className="p-4 " style={{ color: "white" }}>
        <center>Welcome {newJoinee.empName}!</center>
      </h1>

      <Image
        src={src}
        alt={newJoinee.empName}
        // roundedCircle
        width="350px"
        height="280px"
        style={imageStyle}
      />
      <Row>
        <Col md={6} sm={6} xs={12}>
          <Col className="small-container">
            <b>HOMETOWN : </b>

            <i> {newJoinee.empHome}</i>
            <img
              src="home1.webp"
              alt="Hometown Image"
              width="150"
              style={{ borderRadius: "50%", paddingLeft: "30px" }}
            />
          </Col>
          {/* Contact Me */}
          <Col className="small-container">
            <b>YOU CAN CONTACT ME:</b>
            <img
              src="contact1.webp"
              alt="Contact Image"
              width="150"
              style={{ borderRadius: "30%", marginLeft: "210px" }}
            />
            <br />
            <b>EMAIL:</b> <i>{newJoinee.empEmail}</i>
            <br />
            <b>PHONE NUMBER:</b> <i>{newJoinee.empPhone}</i>
          </Col>
          {/* Hobbies */}
          <Col className="small-container">
            <b>HOBBIES :</b>
            <br />
            <i>{newJoinee.empHobbies} </i>
            <img
              src="hobbies1.webp"
              alt="Hobbies Image"
              width="150"
              style={{ borderRadius: "50%", marginLeft: "200px" }}
            />
          </Col>
          {/* What Will I Become */}
          <Col className="small-container">
            <b>WHAT WOULD I BE IF NOT IN MY CURRENT PROFESSION? </b>
            <img
              src="prof1.webp"
              alt="WWIB Image"
              width="100"
              style={{ borderRadius: "50%", marginLeft: "350px" }}
            />
            <br />
            <i>{newJoinee.empWwib}</i>
          </Col>
        </Col>

        <Col md={6} sm={6} xs={12}>
          {/* Position */}
          <Col className="small-container">
            <div>
              <b>POSITION:</b>

              <i> {newJoinee.position && newJoinee.position.positionName}</i>
              <img
                src="job1.webp"
                alt="Position Image"
                width="120"
                style={{ borderRadius: "50%", marginLeft: "350px" }}
              />
            </div>

            {/* IBU and Manager */}

            <div>
              <b>IBU:</b> <i>{newJoinee.ibu && newJoinee.ibu.ibuName}</i>
              <br />
              <br />
              <br />
              <b>MANAGER:</b> <i>{newJoinee.ibu && newJoinee.ibu.ibuManager}</i>
            </div>
            <br />
            <br />
          </Col>

          {/* Core Skills */}
          <Col className="small-container">
            <div>
              <b>CORE SKILLS: </b>

              <i> {newJoinee.empCoreSkills}</i>
              <img
                src="skill1.webp"
                alt="Core Skills Image"
                width="100"
                style={{ borderRadius: "50%", marginLeft: "200px" }}
              />
              <br />
            </div>
          </Col>
          {/* Education */}
          <Col className="small-container">
            <div>
              <b>EDUCATION : </b>
              <i>{newJoinee.empEducation} </i>{" "}
              <img
                src="ed1.webp"
                alt="Education Image"
                width="100"
                style={{ borderRadius: "20%", marginLeft: "200px" }}
              />
            </div>
          </Col>
          {/* Quote */}
          <Col className="small-container">
            <div>
              <br />
              <br />

              <br />
              <img
                src="q1.webp"
                alt="Quote Image"
                width="100"
                style={{ borderRadius: "50%", paddingLeft: "10px" }}
              />
              <b>QUOTE THAT FUELS ME:</b>

              <i>"{newJoinee.empQuote}" </i>
              <br />
              <br />

              <br />
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default DesignVariant1;
