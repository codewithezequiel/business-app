import logo1 from "../../src/logo.svg";
import logo2 from "../../src/logo.svg";
import logo3 from "../../src/logo.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import italy from "../assets/img/italy-2-bg.jpg";

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="service" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-bx wow zoomIn">
              <h2>Services</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme service-slider"
              >
                <div className="item">
                  <img src={logo1} alt="random logo" />
                  <h5>Traditional</h5>
                </div>
                <div className="item">
                  <img src={logo2} alt="random logo" />
                  <h5>Quality</h5>
                </div>
                <div className="item">
                  <img src={logo3} alt="random logo" />
                  <h5>Affordable</h5>
                </div>
                <div className="item">
                  <img src={logo1} alt="random logo" />
                  <h5>Convenient</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={italy} alt="random logo" />
    </section>
  );
};
