import Navbars from "./navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
function Contact() {
  const [error, setError] = useState("");
  const [lname, setlname] = useState("");
  const [fname, setfname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const handlelname = (e) => {
    if (error) setError("");
    setlname(e.target.value);
    console.log(lname);
  };

  const handlefname = (e) => {
    if (error) setError("");
    setfname(e.target.value);
  };

  const handleemail = (e) => {
    if (error) setError("");
    setemail(e.target.value);
  };

  const handlemsg = (e) => {
    if (error) setError("");
    setmsg(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    if (!fname) {
      setError("First Name is required.");
    } else if (!lname) {
      setError("Last Name is required.");
    } else if (!email) {
      setError("Email is required.");
    } else if (!msg) {
      setError("Message is required.");
    } else {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_lxkzucl",
          "template_oyxxt8x",
          form.current,
          "kpmcu9iVYGvAzhqvK"
        )
        .then(
          (result) => {
            setError(result.text);
          },
          (err) => {
            setError(err.message);
          }
        );
    }
    setemail("");
    setlname("");
    setfname("");
    setmsg("");
  };
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div className="text-center">
        <div className="bg-light" style={{ height: "100vh" }}>
          <div className=" d-flex  flex-row justify-content-center">
            <div
              className="card shadow"
              style={{
                marginTop: "7rem",
                width: "30rem",
              }}
            >
              <form ref={form}>
                <div style={{}} className=" card-body">
                  <div className=" mt-2 mb-3 d-flex ">
                    <input
                      type="text"
                      name="FName"
                      className="form-control input"
                      onChange={handlefname}
                      value={fname}
                      placeholder="First Name"
                    />
                    <input
                      type="text"
                      name="LName"
                      onChange={handlelname}
                      value={lname}
                      className="form-control ms-4"
                      placeholder="Last Name"
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      onChange={handleemail}
                      value={email}
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      type="text"
                      name="message"
                      onChange={handlemsg}
                      value={msg}
                      rows="5"
                      className="form-control d-block"
                      placeholder="Message"
                      style={{ height: "100px" }}
                    />
                  </div>
                  {error ? (
                    error == "OK" ? (
                      <div className="alert alert-warning" role="alert">
                        Mail sent successfully
                      </div>
                    ) : (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )
                  ) : (
                    ""
                  )}
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <button
                      type="submit"
                      onClick={sendEmail}
                      className="btn btn-primary  col-sm-9 mt-1"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
