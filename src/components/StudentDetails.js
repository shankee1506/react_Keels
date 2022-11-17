import React, { useState,useEffect } from "react";
import { Card, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { v4 as uuid } from "uuid";
import students from "../sampleData/Students";
import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  // const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    contactPerson: "",
    contactNo: "",
  });
  const [id, setId] = useState("");
  // const [lastName, setLastName] = useState('')
  // const [contactPerson, setContactPerson] = useState('')
  // const [contactNo,setContactNo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // setValidated(true);
    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    students.push({
      id: uniqueId,
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      contactPerson: inputs.contactPerson,
      contactNo: inputs.contactNo,
    });

    // var index = students
    //   .map(function (e) {
    //     return e.id;
    //   })
    //   .indexOf(id);
    // let a = students[index];

    // a.firstName = inputs.firstName;
    // a.lastName = inputs.lastName;
    // a.contactPerson = inputs.contactPerson;
    // a.contactNo = inputs.contactNo;

    navigate("/studentDetails");
    console.log(inputs);



  };

  // useEffect(() => {
  //   setInputs(localStorage.getItem(inputs.firstName));
  //   setInputs(localStorage.getItem(inputs.lastName))
  //   setInputs(localStorage.getItem(inputs.contactPerson))
  //   setInputs(localStorage.getItem(inputs.contactNo))
  //   setInputs(localStorage.getItem("Id"))

  // }, [])
  
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDelete = (id) => {
    var index = students
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    students.splice(index, 1);
    navigate("/studentDetails");
  };

  // const handleEdit = (id, firstName, lastName, contactPerson, contactNo) => {
  //   localStorage.setItem(inputs?.firstName, firstName)
  //   localStorage.setItem(inputs?.lastName, lastName)
  //   localStorage.setItem(inputs?.contactPerson, contactPerson)
  //   localStorage.setItem(inputs?.contactNo, contactNo)
  //   localStorage.setItem("Id",id)
  // };
  return (
    <div>
      <Card>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="firstName"
                onChange={handleChange}
                required
                type="text"
                placeholder="First name"
                // value={inputs?.firstName}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="lastName"
                onChange={handleChange}
                required
                type="text"
                placeholder="Last name"
                // value={inputs?.lastName}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Contact Person</Form.Label>
              <Form.Control
                name="contactPerson"
                onChange={handleChange}
                required
                type="text"
                placeholder="Contact Person"
                // value={inputs?.contactPerson}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Contact No</Form.Label>
              <Form.Control
                name="contactNo"
                onChange={handleChange}
                required
                type="text"
                placeholder="Contact No"
                // value={inputs?.contactNo}
              />
            </Form.Group>
          </Row>
          <Button variant="success" type="submit">
            Save
          </Button>{" "}
        </Form>
      </Card>
      <Card>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Contact Person</th>
              <th>Contact No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <tr>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.contactPerson}</td>
                <td>{item.contactNo}</td>
                <td>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>{" "}
                  <Button
                    onClick={() =>
                     alert(item.id)
                    }
                    variant="warning"
                  >
                    Reset
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default StudentDetails;
