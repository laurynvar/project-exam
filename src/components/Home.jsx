import { StyledHomeHero } from "../styles/StyledHomePage";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const HomeHero = require("../assets/home_hero.png");

export const HomePage = () => {
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
                  Hey! <br />
                  <span
                    style={{
                      color: "black)",
                    }}
                  >
                    nice to meet you in our participants registration service!
                  </span>
                </h1>
                <MDBRow className="mb-4">
                  <MDBCol md="6">
                    <Link
                      className="btn btn-outline-dark btn-lg"
                      as={Link}
                      to="/login"
                      role="button"
                    >
                      Sign In
                    </Link>
                  </MDBCol>
                  <MDBCol md="6">
                    <Link
                      className="btn btn-outline-light btn-lg"
                      as={Link}
                      to="/register"
                      role="button"
                    >
                      Sign Up
                    </Link>
                  </MDBCol>
                </MDBRow>
              </div>
            </div>
          </div>
        </section>
      </MDBContainer>

      <div>
        <StyledHomeHero src={HomeHero} />
      </div>
    </>
  );
};
