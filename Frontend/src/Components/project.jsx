import Caraousal from "./caraousal";
import Navbars from "./navbar";

function Project() {
  return (
    <div style={{ backgroundColor: "#eeeee4" }}>
      <Navbars />
      <div
        className="w-100 mt-5  pt-5 col-lg-12"
        style={{ textAlign: "center", backgroundColor: "#f3ecf9" }}
      >
        <span className=" mb-4 mt-5 title">ChatApplication</span>
        <hr className="border-1 border border-dark"></hr>
        <div className="row ">
          <div className="col-lg-6 mt-5 pb-5 ">
            <div className=" ms-5  pe-5 pt-2 pb-2 d-inline-flex">
              <Caraousal id="chatapp" img2="Signin.png" img1="Text.png" />
            </div>
          </div>
          <div
            className="col-lg-5 mt-5 pt-2 pb-5"
            style={{
              backgroundColor: "#f3ecf9",
            }}
          >
            <div
              className="ms-5 mt-4 me-5 pt-3 text-center pb-5 shadow"
              style={{ backgroundColor: "white" }}
            >
              <ul
                className=""
                style={{
                  listStyleType: "none",
                }}
              >
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://www.loom.com/share/e8e20b94c8804a84ae539bc4a72934e1?sid=5a28f808-f0be-49dd-b027-254877303760"
                    className="Navoption "
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-solid fa-play fa-lg"
                    ></i>
                    <strong className="ms-2 ">Demo</strong>
                  </a>
                </li>
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://chatapp-065s.onrender.com/signin"
                    className="Navoption"
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-solid fa-globe fa-bounce fa-lg"
                    ></i>
                    <strong className="ms-2 ">* Live</strong>
                  </a>
                </li>
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://github.com/aravindDBhat/ChatApp"
                    className="Navoption "
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-brands fa-square-github fa-lg"
                    ></i>
                    <strong className="ms-2 ">Github</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-100 pt-5 col-lg-12"
        style={{ textAlign: "center", backgroundColor: "white" }}
      >
        <span className=" mb-4 mt-5 title2">Webpage</span>
        <hr className="border-1 border border-dark"></hr>

        <div className="row ">
          <div
            className="col-lg-5 mt-5 pt-2 pb-5"
            style={{
              backgroundColor: "white",
              textAlign: "justify",
            }}
          >
            <div
              className="ms-5 mt-5 me-5 pt-3 pb-5 text-center shadow"
              style={{ backgroundColor: "#f3ecf9" }}
            >
              <ul
                className=""
                style={{
                  listStyleType: "none",
                }}
              >
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://www.loom.com/share/0db7f30263b04d30a6e7de606f752bbb?sid=a5425c87-177b-49a7-8b90-f59eaa0728ff"
                    className="Navoption "
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-solid fa-play fa-lg"
                    ></i>
                    <strong className="ms-2 ">Demo</strong>
                  </a>
                </li>
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://webpage-eight-nu.vercel.app/"
                    className="Navoption"
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-solid fa-globe fa-bounce fa-lg"
                    ></i>
                    <strong className="ms-2 ">* Live</strong>
                  </a>
                </li>
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://github.com/aravindDBhat/webpage"
                    className="Navoption "
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-brands fa-square-github fa-lg"
                    ></i>
                    <strong className="ms-2 ">Github</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 mt-5 pb-5 ">
            <div className=" pe-5 pt-2 pb-2 d-inline-flex">
              <Caraousal id="webpage" img2="webpage2.png" img1="webpage1.png" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-100  pt-5 col-lg-12"
        style={{ textAlign: "center", backgroundColor: "#f3ecf9" }}
      >
        <span className=" mb-4 mt-5 title3">EmailAssistant</span>
        <hr className="border-1 border border-dark"></hr>

        <div className="row ">
          <div className="col-lg-6 mt-5 pb-5 ">
            <div className=" ms-5 pe-5 pt-2 pb-2">
              <Caraousal
                id="emailassistant"
                img1="login.png"
                img2="email.png"
              />
            </div>
          </div>
          <div
            className="col-lg-5 mt-5 pt-2 pb-5"
            style={{
              backgroundColor: "#f3ecf9",
              textAlign: "justify",
            }}
          >
            <div
              className="ms-5  me-5 pt-3 pb-5 text-center shadow"
              style={{ backgroundColor: "white", marginTop: "70px" }}
            >
              {" "}
              <ul className="" style={{ listStyleType: "none" }}>
                <li className="mt-4 ms-4 ">
                  <a
                    href="https://github.com/aravindDBhat/Voice_base_Email_Assistant"
                    className="Navoption "
                    style={{ textDecoration: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      className="fa-brands fa-square-github fa-lg"
                    ></i>
                    <strong className="ms-2 ">Github</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
