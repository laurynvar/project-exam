import React from "react";
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTypography,
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
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="p-4">
              <MDBRow className="justify-content-center">
                <MDBCol lg="8">
                  <div className="text-center">
                    <MDBIcon
                      fas
                      icon="user-plus"
                      size="3x"
                      style={{ marginTop: "30px" }}
                    />
                    <hr />
                    <MDBRow>
                      <h1
                        className="my-3 display-3 fw-bold ls-tight"
                        style={{
                          color: "black",
                        }}
                      >
                        Come on in! <br />
                        <span
                          style={{
                            color:
                              "hsl(210, 1.9999999999999931%, 80.3921568627451%)",
                          }}
                        >
                          we have exclusive discounts and memes that will make
                          you LOL!
                        </span>
                      </h1>
                    </MDBRow>
                    <hr />
                  </div>
                  <form style={{ marginTop: "50px" }} onSubmit={handleOnSubmit}>
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
                      color="dark"
                    >
                      Register participant
                    </MDBBtn>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBContainer>
    </section>
  );
};
