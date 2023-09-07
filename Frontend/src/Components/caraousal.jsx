function Caraousal(propes) {
  return (
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide ms-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={require(`./${propes.img1}`)}
            class="d-block w-100"
            alt="1"
            width={400}
            height={300}
          />
        </div>
        <div class="carousel-item">
          <img
            src={require(`./${propes.img2}`)}
            class="d-block w-100"
            alt="2"
            width={400}
            height={300}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next "
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon bg-dark"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Caraousal;
