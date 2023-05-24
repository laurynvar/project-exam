import React from "react";
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

export const Participant = ({ participant }) => {
  const { name, surname, email, phone } = participant;

  return (
    <>
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <MDBCardImage
                  src="https://global-uploads.webflow.com/618e36726d3c0f19c9284e56/61f7ce8e8dc8d6499373f820_user.png"
                  fluid
                  className="rounded-circle"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                />
              </div>
              <div className="ms-3">
                <MDBTypography tag="h5">
                  {name} {surname}
                </MDBTypography>
                <p className="text-muted mb-0">{email}</p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div style={{ width: "50px" }}>
                <MDBTypography
                  tag="h5"
                  className="fw-normal mb-0"
                ></MDBTypography>
              </div>
              <div style={{ width: "150px" }}>
                <MDBTypography tag="h5" className="mb-0">
                  {phone}
                </MDBTypography>
              </div>
              <MDBBtn style={{ color: "#cecece" }}>
                <MDBIcon fas icon="trash-alt" />
              </MDBBtn>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};
