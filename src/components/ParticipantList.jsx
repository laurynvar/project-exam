import { useContext, useEffect, useState } from "react";
import { Participant } from "./Participant";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export const ParticipantList = () => {
  const { isSignedIn } = useContext(AuthenticationContext);
  const [registeredParticipants, setRegisteredParticipants] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/participants")
      .then((response) => {
        setRegisteredParticipants(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteParticipant = (id) => {
    const confirm = window.confirm(
      "Would you like to Delete this participant?"
    );
    if (confirm) {
      axios
        .delete("http://localhost:5000/participants/" + id)
        .then((response) => {
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isSignedIn) {
    return (
      <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol>
                <MDBCard>
                  <MDBCardBody className="p-4">
                    <MDBRow>
                      <MDBCol lg="7">
                        <MDBTypography tag="h5">
                          <Link
                            as={Link}
                            to="/clientregister"
                            style={{ textDecoration: `none` }}
                            className="text-body"
                          >
                            <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                            Return to Client register page{" "}
                          </Link>
                        </MDBTypography>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p className="mb-1">Event participants list</p>
                            <p className="mb-0">
                              There are ... participants in the list
                            </p>
                          </div>
                          <div>
                            <p>
                              <span className="text-muted">Sort by:</span>
                              <a href="#!" className="text-body">
                                name
                                <MDBIcon fas icon="angle-down mt-1" />
                              </a>
                            </p>
                          </div>
                        </div>{" "}
                        {registeredParticipants.map((participant) => (
                          <Participant
                            participant={participant}
                            key={participant.id}
                            onDelete={() => deleteParticipant(participant.id)}
                          />
                        ))}
                      </MDBCol>

                      <MDBCol lg="5">
                        <MDBCard className="bg-dark text-white rounded-3">
                          <MDBCardBody>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <MDBCardImage
                                src="https://www.mzirafos.lt/wp-content/uploads/2022/09/TD-vizualas-vilniusevents-scaled-19-1024x754.jpg"
                                position="top"
                                alt=""
                              />
                            </div>
                            <MDBTypography tag="h5" className="mb-0">
                              Event details
                            </MDBTypography>
                            <p className="small">Payment methods</p>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-visa fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-amex fa-2x me-2" />
                            </a>
                            <a href="#!" type="submit" className="text-white">
                              <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                            </a>

                            <form className="mt-4">
                              <MDBInput
                                className="mb-4"
                                label="Cardholder's Name"
                                type="text"
                                size="lg"
                                placeholder="Cardholder's Name"
                                contrast
                              />

                              <MDBInput
                                className="mb-4"
                                label="Card Number"
                                type="text"
                                size="lg"
                                minLength="19"
                                maxLength="19"
                                placeholder="1234 5678 9012 3457"
                                contrast
                              />

                              <MDBRow className="mb-4">
                                <MDBCol md="6">
                                  <MDBInput
                                    className="mb-4"
                                    label="Expiration"
                                    type="text"
                                    size="lg"
                                    minLength="7"
                                    maxLength="7"
                                    placeholder="MM/YYYY"
                                    contrast
                                  />
                                </MDBCol>
                                <MDBCol md="6">
                                  <MDBInput
                                    className="mb-4"
                                    label="Cvv"
                                    type="text"
                                    size="lg"
                                    minLength="3"
                                    maxLength="3"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    contrast
                                  />
                                </MDBCol>
                              </MDBRow>
                            </form>

                            <hr />

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Subtotal</p>
                              <p className="mb-2">100&euro;</p>
                            </div>

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Total(Incl. taxes)</p>
                              <p className="mb-2">100&euro;</p>
                            </div>

                            <MDBBtn color="info" block size="lg">
                              <div className="d-flex justify-content-between">
                                <span>100&euro;</span>
                                <span>
                                  Checkout{" "}
                                  <i className="fas fa-long-arrow-alt-right ms-2"></i>
                                </span>
                              </div>
                            </MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    );
  }
};
