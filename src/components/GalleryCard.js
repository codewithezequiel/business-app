import { Col } from "react-bootstrap";

export const GalleryCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="gall-imgbx">
        <img src={imgUrl} />
        <div className="gall-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
