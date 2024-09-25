import img1 from "../images/hands-coffee-cup-apple.jpg"
import img2 from "../images/html_image_slider.jpg"
import img3 from "../images/1544124707023.jpeg"
const MySlider =()=> {
 
    return (
      <>
      <div id="carouselExampleAutoplaying" className="carousel slide container" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={img1} className="d-block w-100" alt="..." style={{height:"578px",width:"477px"}}/>
    </div>
    <div className="carousel-item">
    <img src={img2}className="d-block w-100" alt="laptop" style={{height:"578px",width:"477px"}}/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." style={{height:"578px",width:"477px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </>
    )
  }

  export default MySlider;
