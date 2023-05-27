import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    surname: "",
    password: "",
  });

  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/register", formData).then((response) => {
      navigate("/login");
    });
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 800,
        }}
      ></div>
      <MDBContainer style={{ position: "absolute" }} fluid className="mt-5">
        <section className="background-radial-gradient overflow-hidden ">
          <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
            <div className="row gx-lg-5 align-items-center mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
                <h1
                  className="my-5 display-3 fw-bold ls-tight"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  Sign Up <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    we have cookies and sweet deals!
                  </span>
                </h1>
                <p
                  className="mb-4 opacity-70"
                  style={{ color: "hsl(218, 81%, 85%)" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Temporibus, expedita iusto veniam atque, magni tempora
                  mollitia dolorum consequatur nulla, neque debitis eos
                  reprehenderit quasi ab ipsum nisi dolorem modi. Quos?
                </p>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                <div
                  id="radius-shape-1"
                  className="position-absolute rounded-circle shadow-5-strong"
                ></div>
                <div
                  id="radius-shape-2"
                  className="position-absolute shadow-5-strong"
                ></div>

                <div className="card bg-glass opacity-90">
                  <div className="card-body px-4 py-5 px-md-5">
                    <form>
                      <MDBRow className="mb-4">
                        <MDBCol>
                          <MDBInput
                            name="name"
                            className="mb-4"
                            id="first2"
                            label="First name"
                            onChange={handleOnChange}
                          />
                        </MDBCol>
                        <MDBCol>
                          <MDBInput
                            name="surname"
                            className="mb-4"
                            id="last2"
                            label="Last name"
                            onChange={handleOnChange}
                          />
                        </MDBCol>
                      </MDBRow>

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
                        onClick={onHandleSubmit}
                        type="submit"
                        block
                        className="mb-4"
                      >
                        Sign up
                      </MDBBtn>

                      <div className="text-center"></div>
                      <p>
                        Have already an account?
                        <Link as={Link} to="/login">
                          Login here
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
    </>
  );
};
