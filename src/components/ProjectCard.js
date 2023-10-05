import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkTo }) => {
  return (
    <Col size={12} sm={3} md={4}>
      <a href={linkTo} target="blank" className="proj-link"> {/* Use an anchor tag with href */}
        <div className="proj-imgbx">
          <img src={imgUrl} className="projectIMG" alt={title} />
          <div className="proj-txtx">
            <h4 className="ProjectCardTitle">{title}</h4>
            <span className="ProjectCardDescription">{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

