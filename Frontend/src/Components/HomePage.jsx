import { React, useState } from "react";
import Navbars from "./navbar";

function HomePage() {
  const [infoVisibility, setInfoVisibiliy] = useState(false);
  const handleInfoVisibility = () => {
    setInfoVisibiliy(true);
    console.log(infoVisibility);
  };
  return (
    <div
      className="w-100 h-100 "
      style={{ backgroundColor: "#eeeee4", margin: "auto 0" }}
    >
      <Navbars />
      <div className="" style={{ width: "100%", margin: "auto 0" }}>
        <div
          className="row pt-5"
          style={{
            width: "100%",
            height: "100vh",
            margin: "auto 0",
            backgroundColor: "#eeeee4",
          }}
        >
          <div
            className="pt-4 col-lg-6"
            style={{
              fontFamily: "serif",
              textAlign: "center",
              color: "#483C32",
              height: "100%",
            }}
          >
            <div className="d-inline">
              <h1 className=" pt-5 mt-5 mb-1">Hi there,</h1>
            </div>
            <div
              style={{ paddingLeft: "500px", paddingRight: "500px" }}
              className="ps-5 pe-5 ms-5 me-5"
            >
              <h1 className=" mb-4 Name">I'm Aravind Bhat</h1>
            </div>
            <h6
              className="mb-4"
              style={{
                fontFamily: "revert-layer",
              }}
            >
              Full Stack Web Developer
            </h6>

            <button
              onClick={handleInfoVisibility}
              className=" mt-4 btn button col-sm-3"
            >
              Contact Me
            </button>
          </div>
          <div
            style={{
              marginTop: "0px",
              textAlign: "center",
              backgroundColor: "#eeeee4",
            }}
            className="me-5 mt-5 col-lg-5 "
          >
            <div className="  mt-5 mb-5 Mern_logo">
              {" "}
              <img src={require("./MERN_LOGO.jpeg")} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
