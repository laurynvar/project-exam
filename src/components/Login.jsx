import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthenticationContext } from "./AuthenticationContext";
import { StyledLoginHero } from "../styles/StyledLogin";
import { MDBContainer, MDBRow, MDBInput, MDBBtn } from "mdb-react-ui-kit";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/login", formData).then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsSignedIn(true);
        navigate("/clientregister");
      } else {
        setError(response.data.message);
      }
    });
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const LoginHero = require("../assets/login_hero.png");

  return (
    <>
      <MDBContainer style={{ position: "absolute" }} fluid className="mt-5">
        <section className="background-radial-gradient overflow-hidden ">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-3 fw-bold ls-tight"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  Come on in! <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    It's time to register participants like a boss and unleash
                    your inner registration superhero!
                  </span>
                </h1>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0 position-relative ">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong "
                ></div>
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong "
                ></div>

                <div className="card bg-glass opacity-80">
                  <div className="card-body px-4 py-5 px-md-5  ">
                    <form onSubmit={handleOnSubmit}>
                      <MDBRow className="mb-4"></MDBRow>

                      <MDBInput
                        name="email"
                        className="mb-4"
                        type="email"
                        id="email2"
                        label="Email address"
                        onChange={handleOnChange}
                      />
                      <MDBInput
                        name="password"
                        className="mb-4"
                        type="password"
                        id="password2"
                        label="Password"
                        onChange={handleOnChange}
                      />

                      <MDBBtn
                        onClick={handleOnSubmit}
                        type="submit"
                        block
                        className="mb-4"
                        color="dark"
                      >
                        Sign in
                      </MDBBtn>

                      <p>
                        Don't have an account?
                        <Link as={Link} to="/register">
                          Sign up here!
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MDBContainer>
      <div>
        <StyledLoginHero src={LoginHero} />
      </div>
    </>
  );
};
