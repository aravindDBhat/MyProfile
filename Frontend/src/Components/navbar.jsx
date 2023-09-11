import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  const [imageVisibility, setImageVisibiliy] = useState(false);
  const visibleImage = () => {
    setImageVisibiliy(!imageVisibility);
  };
  return (
    <div className="">
      <Navbar
        collapseOnSelect
        fixed="top"
        style={{ zIndex: 100 }}
        expand="lg"
        bg="secondary"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand style={{ marginRight: "50%" }} href="#home">
            {" "}
            <div>
              <img
                src={require("./newphoto-modified.png")}
                alt="profile pic"
                width={66}
                height={50}
                className="me-3 btn profile"
                onClick={visibleImage}
              />
              Profile
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse
            style={{ marginLeft: "500px", textAlign: "end" }}
            className="ms-5 ps-5"
          >
            <Nav>
              <Nav.Link
                style={{ textAlign: "end" }}
                className="btn me-1 Navoption"
                href="/"
              >
                Home
              </Nav.Link>
              <Nav.Link
                style={{ textAlign: "end" }}
                className="btn  me-1 Navoption"
                href="https://drive.google.com/file/d/153ihyOzIm_DkihHM-ZaNH0pxUwSCrJE2/view?usp=sharing"
              >
                {console.log(process.env.about)}
                About
              </Nav.Link>
              <Nav.Link
                style={{ textAlign: "end" }}
                className="btn  me-1 Navoption"
                href="/project"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{ textAlign: "end" }}
                className="btn Navoption"
                href="#contact"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {imageVisibility ? (
        <>
          <button
            className="ms-2 mt-2"
            onClick={visibleImage}
            style={{ zIndex: 1001, position: "absolute" }}
          >
            <i
              style={{ color: "blue", border: "10px solid #fff" }}
              className="fa-solid fa-xmark fa-fade fa-xl"
            ></i>
          </button>{" "}
          <div
            onClick={visibleImage}
            style={{
              textAlign: "center",
              width: "100%",
              height: "100vh",
              position: "absolute",
              zIndex: 1000,
              backgroundColor: "black",
              padding: "18px",
              border: "1px solid #140e64",
              opacity: "95%",
            }}
          >
            <img
              src={require("./newphoto-modified.png")}
              alt="profile pic"
              width={470}
              height={470}
              className="me-3 mt-5"
              onClick={visibleImage}
              style={{ opacity: "100%" }}
            />
          </div>
        </>
      ) : (
        " "
      )}
    </div>
  );
}
export default Navbars;
