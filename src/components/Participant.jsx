import React from "react";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Participant = ({ participant }) => {
  const { name, surname, email, phone } = participant;
  return (
    <MDBContainer fluid>
      <section>
        <div className="shadow-4 rounded-5 overflow-hidden">
          <MDBTable>
            <MDBTableHead light>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody style={{ verticalAlign: "middle" }}>
              <tr>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">{name}</p>
                      <p className="text-muted mb-0">john.doe@gmail.com</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{surname}</p>
                  <p className="text-muted mb-0">IT department</p>
                </td>
                <td>
                  <MDBBadge light color="success" pill>
                    {email}
                  </MDBBadge>
                </td>
                <td>{phone}</td>
                <td>
                  <MDBBtn
                    className="fw-bold"
                    color="link"
                    rounded
                    size="sm"
                    rippleColor="dark"
                  >
                    {Delete}
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </MDBContainer>
  );
};
