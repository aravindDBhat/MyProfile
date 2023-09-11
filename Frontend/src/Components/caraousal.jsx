function Caraousal(propes) {
  return (
    <div
      id={propes.id}
      className="carousel bg-light shadow slide ms-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require(`./${propes.img1}`)}
            className="d-block w-100  ps-5 pe-5 pt-2 pb-2"
            alt="1"
            width={400}
            height={300}
          />
        </div>
        <div className="carousel-item">
          <img
            src={require(`./${propes.img2}`)}
            className="d-block w-100  ps-5 pe-5 pt-2 pb-2"
            alt="2"
            width={400}
            height={300}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${propes.id}`}
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next "
        type="button"
        data-bs-target={`#${propes.id}`}
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Caraousal;
