import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { GalleryCard } from "./GalleryCard";
import mex1 from "../assets/img/mex-1.jpg";
import mex2 from "../assets/img/mex-2.jpg";
import ita1 from "../assets/img/ita-1.jpg";
import ita2 from "../assets/img/ita-2.jpg";
import col1 from "../assets/img/col-1.jpg";
import col2 from "../assets/img/col-2.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import italy from "../assets/img/italy-2-bg.jpg";

export const Gallery = () => {
  const galleries = [
    {
      title: "El Burrito",
      description: "spices cultivated in MX",
      imgUrl: mex1,
    },
    {
      title: "Le tre pizze",
      description: "sauces imported from IT",
      imgUrl: ita1,
    },
    {
      title: "La Bandeja",
      description: "spices brought from Medellin",
      imgUrl: col1,
    },
    {
      title: "La Carne Asada",
      description: "Rice cultivated in MX",
      imgUrl: mex2,
    },
    {
      title: "La Pasta",
      description: "Ingredients from Milan",
      imgUrl: ita2,
    },
    {
      title: "Frijoles simples",
      description: "Beans grown in Colombia",
      imgUrl: col2,
    },
  ];

  return (
    <section className="gallery" id="galleries">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Gallery</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="galleries-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {galleries.map((gallery, index) => {
                            return <GalleryCard key={index} {...gallery} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={italy}></img> */}
    </section>
  );
};
