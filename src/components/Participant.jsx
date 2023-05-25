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

export const Participant = ({ participant, onDelete }) => {
  const { id, name, surname, email, phone } = participant;

  return (
    <>
      <MDBCard className="mb-3">
        <MDBCardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <MDBCardImage
                  src="https://simg.nicepng.com/png/small/136-1366211_group-of-10-guys-login-user-icon-png.png"
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
              <MDBIcon fas icon="phone" style={{ marginRight: "5px" }} />
              <div style={{ width: "150px" }}>
                <MDBTypography tag="h5" className="mb-0">
                  {phone}
                </MDBTypography>
              </div>
              <MDBBtn
                color="dark"
                className="rounded-circle"
                onClick={() => onDelete(id)}
                style={{ color: "#cecece" }}
              >
                <MDBIcon fas icon="trash-alt" />
              </MDBBtn>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};
