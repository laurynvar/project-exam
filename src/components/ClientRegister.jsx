import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBTextArea,
} from "mdb-react-ui-kit";

export const ClientRegister = () => {
  return (
    <MDBContainer fluid className="mt-5">
      <section>
        <MDBRow className="justify-content-center">
          <MDBCol lg="8">
            <form>
              <MDBRow>
                <MDBCol>
                  <MDBInput className="mb-4" label="First name" />
                </MDBCol>
                <MDBCol>
                  <MDBInput className="mb-4" label="Last name" />
                </MDBCol>
              </MDBRow>

              <MDBInput className="mb-4" label="Email" type="email" />

              <MDBInput className="mb-4" label="Phone" type="tel" />

              <MDBTextArea
                label="Additional information"
                rows={4}
                className="mb-4"
              />

              <MDBBtn type="submit" block className="mb-4">
                Register participant
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
};
