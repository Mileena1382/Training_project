import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewjoineyRegister = () => {
  const [positions, setPositions] = useState([]);
  const [ibus, setIbu] = useState([]);
  const [manager, setManager] = useState("");
  const [empImage, setEmpImage] = useState(null);
  const [empId, setEmpId] = useState(null);
  const [empName, setEmpName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [empPhone, setEmpPhone] = useState(null);
  const [empHometown, setEmpHometown] = useState("");
  const [empExperience, setEmpExperice] = useState(null);
  const [empWwib, setEmpWwib] = useState("");
  const [empQuote, setEmpQuote] = useState("");
  const [empEducation, setEmpEducation] = useState("");
  const [empPosition, setEmpPosition] = useState(null);
  const [empIbu, setEmpIbu] = useState(null);
  const [empHobbies, setEmpHobbies] = useState("");
  const [empCoreSkills, setEmpCoreSkills] = useState("");

  const handleEmpIdChange = (e) => {
    setEmpId(parseInt(e.target.value, 10));
  };
  const handleEmpNameChange = (e) => {
    setEmpName(e.target.value);
  };
  const handleEmpEmailChange = (e) => {
    setEmpEmail(e.target.value);
  };
  const handleEmpExperinceChange = (e) => {
    setEmpExperice(parseInt(e.target.value, 10));
  };
  const handleEmpHometownChange = (e) => {
    setEmpHometown(e.target.value);
  };
  const handleEmpWwibChange = (e) => {
    setEmpWwib(e.target.value);
  };
  const handleEmpQuoteChange = (e) => {
    setEmpQuote(e.target.value);
  };
  const handleEmpRoleChange = (e) => {
    setEmpPosition(parseInt(e.target.value, 10));
  };
  const handleEmpPhoneChange = (e) => {
    setEmpPhone(parseInt(e.target.value, 10));
  };
  const handleEmpHobbiesChange = (e) => {
    setEmpHobbies(e.target.value);
  };
  const handleEmpCoreSkillsChange = (e) => {
    setEmpCoreSkills(e.target.value);
  };
  const handleEmpEducationChange = (e) => {
    setEmpEducation(e.target.value);
  };
  const handleImageInputChange = (e) => {
    console.log(e.target.files[0]);
    setEmpImage(e.target.files[0]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8081/positions/")
      .then((response) => {
        setPositions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8081/ibus/")
      .then((response) => {
        setIbu(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectMangerChange = (event) => {
    const selectedIbuId = event.target.value;
    setEmpIbu(parseInt(selectedIbuId, 10));
    const selectedIbuManager = ibus.find((ibu) => ibu.ibuId == selectedIbuId);
    if (selectedIbuManager) {
      setManager(selectedIbuManager.ibuManager);
    } else {
      setManager("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      empId,
      empName,
      empEmail,
      empHome: empHometown,
      empExperience,
      empPhone,
      empQuote,
      empWwib,
      empHobbies,
      empCoreSkills,
      empEducation,
      ibu: { ibuId: empIbu },
      position: { positionId: empPosition },
    };

    console.log(formData);

    axios
      .post("http://localhost:8081/newjoinee/post", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    alert("Data submited successfully");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center m-2 p-4">
          <div className="card">
            <div className="card-body px-4">
              <h2
                style={{
                  background: "linear-gradient(to right, #6f42c1,#6610f2)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textAlign: "center",
                }}
                className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5"
              >
                {" "}
                New Joinee Registration Form
              </h2>
              <Form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="number"
                      placeholder="Enter employee id"
                      className="my-3"
                      onChange={handleEmpIdChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Enter employee name"
                      className="my-3"
                      onChange={handleEmpNameChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="email"
                      placeholder="Enter employee email"
                      className="my-3"
                      onChange={handleEmpEmailChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <Form.Control
                      type="number"
                      placeholder="Enter employee phone number"
                      className="my-3"
                      onChange={handleEmpPhoneChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Enter employee hometown"
                      className="my-3"
                      onChange={handleEmpHometownChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <Form.Control
                      type="number"
                      placeholder="Enter employee experience"
                      className="my-3"
                      onChange={handleEmpExperinceChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="What would you become if you were not this"
                      className="my-3"
                      onChange={handleEmpWwibChange}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Hobbies"
                      className="my-3"
                      onChange={handleEmpHobbiesChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Your favourite quote"
                      className="my-3"
                      onChange={handleEmpQuoteChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Core Skills"
                      className="my-3"
                      onChange={handleEmpCoreSkillsChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Education"
                      className="my-3"
                      onChange={handleEmpEducationChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Select
                      aria-label="roleSelect"
                      className="my-3"
                      onChange={handleEmpRoleChange}
                      required
                    >
                      <option value={-1}>Select Position</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position.positionId}>
                          {position.positionName}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <Form.Select
                      aria-label="ibuSelector"
                      className="my-3"
                      onChange={selectMangerChange}
                      required
                    >
                      <option value={-1}> Select IBU</option>
                      {ibus.map((ibu, index) => (
                        <option key={index} value={ibu.ibuId}>
                          {ibu.ibuName}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Form.Control
                      type="text"
                      placeholder="Manager"
                      value={manager}
                      readOnly
                      className="my-3"
                      required
                    />{" "}
                  </div>
                </div>

                <div className="row justify-content-end">
                  <Form.Group className=" text-left">
                        <Form.Label>
                          Insert your picture (max size 50kb)
                        </Form.Label>
                        <Form.Control
                          type="file"
                          onChange={handleImageInputChange}
                          style={{ height: "35px" }}
                        />
                      </Form.Group>
                    
                      
 
                     
                  </div>

                <div className="row justify-content-center">
                  <div className="col-md-6 d-flex justify-content-center">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn btn-primary m-4"
                    >
                      Submit
                    </Button>
                    <Link to="/deck" className="btn btn-success m-4 ms-4">
                      View Deck
                    </Link>
                  </div>
                </div>

                
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewjoineyRegister;
