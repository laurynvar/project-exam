import { useContext, useEffect, useState } from "react";
import { Participant } from "./Participant";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import logo from "../assets/white_logo.png";

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

                            <img src={logo} style={{ width: "150px" }} />
                            <MDBTypography tag="h2" className="mb-0">
                              RAMMSTEIN AFTERPARTY
                            </MDBTypography>

                            <hr />

                            <p className="small">Venue:</p>
                            <MDBTypography tag="h5" className="mb-0">
                              Vilnius | Lithuania
                            </MDBTypography>

                            <MDBTypography tag="h5" className="mb-0">
                              Vingio parkas
                            </MDBTypography>

                            <MDBRow className="mb-4"></MDBRow>

                            <MDBRow className="mb-4">
                              <MDBCol md="6">
                                <p className="small">Date:</p>
                                <MDBTypography tag="h5" className="mb-0">
                                  23/05/22
                                </MDBTypography>
                              </MDBCol>
                              <MDBCol md="6">
                                <p className="small">Time:</p>
                                <MDBTypography tag="h5" className="mb-0">
                                  11 PM - 3 AM
                                </MDBTypography>
                              </MDBCol>
                            </MDBRow>

                            <hr />

                            <div className="d-flex justify-content-between">
                              <p className="mb-2">Registered participants</p>
                              <p className="mb-2">100</p>
                            </div>
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
