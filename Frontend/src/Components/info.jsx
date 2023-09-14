import React from "react";
import ToastContainer from "react-bootstrap/ToastContainer";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import Toast from "react-bootstrap/Toast";

export default function Info() {
  const [visibleEmail, setVisibleEmail] = useState(false);
  const [LinkedIn, setLinkedIn] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const toggle1 = () => {
    setVisibleEmail(!visibleEmail);
  };
  const toggle2 = () => {
    setLinkedIn(!LinkedIn);
  };
  const toggle3 = () => {
    setInstagram(!instagram);
  };

  return (
    <div style={{ position: "absolute" }} className="">
      <Pagination className=" ms-5 ps-5 mt-4" size="md">
        <Pagination.Item onClick={toggle1} className="btn " key="1">
          Email{" "}
        </Pagination.Item>
        <div className="mb-5">
          <ToastContainer containerPosition="start">
            <Toast show={visibleEmail}>
              <Toast.Header>
                <strong className="me-auto">Email</strong>
              </Toast.Header>
              <Toast.Body>aravindbhat88@gmail.com</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        <Pagination.Item onClick={toggle2} className="btn" key="3">
          Instagram
        </Pagination.Item>
        <div className="mt-5">
          <ToastContainer containerPosition="">
            <Toast show={instagram}>
              <Toast.Header>
                <strong className="me-auto">LinkedIn</strong>
              </Toast.Header>
              <Toast.Body>
                https://www.linkedin.com/in/aravind-bhat-98754426b/
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        <Pagination.Item onClick={toggle3} className="btn" key="2">
          LinkedIn
        </Pagination.Item>
        <div>
          <ToastContainer containerPosition="end">
            <Toast show={LinkedIn}>
              <Toast.Header>
                <strong className="me-auto">Instagram</strong>
              </Toast.Header>
              <Toast.Body>aravind.bhat.5768</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </Pagination>
    </div>
  );
}
