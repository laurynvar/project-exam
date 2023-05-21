import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";
import axios from "axios";

export const ClientRegister = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/participants", form)
      .then((response) => console.log("Succesful response", response))
      .catch((err) => console.log("err", err));
  };

  return (
    <MDBContainer fluid className="mt-5">
      <section>
        <MDBRow className="justify-content-center">
          <MDBCol lg="8">
            <form onSubmit={handleOnSubmit}>
              <MDBRow>
                <MDBCol>
                  <MDBInput
                    name="name"
                    onChange={handleChange}
                    className="mb-4"
                    label="First name"
                  />
                </MDBCol>
                <MDBCol>
                  <MDBInput
                    name="surname"
                    onChange={handleChange}
                    className="mb-4"
                    label="Last name"
                  />
                </MDBCol>
              </MDBRow>

              <MDBInput
                name="email"
                onChange={handleChange}
                className="mb-4"
                label="Email"
                type="email"
              />

              <MDBInput
                name="phone"
                onChange={handleChange}
                className="mb-4"
                label="Phone"
                type="tel"
              />

              <MDBBtn
                onSubmit={handleOnSubmit}
                type="submit"
                block
                className="mb-4"
              >
                Register participant
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};
