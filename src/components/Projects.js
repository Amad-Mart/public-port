import React, { useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RiversideHome from "../assets/img/Riversidemfg-Homepage.PNG";
import MckesssonHome from "../assets/img/mckessson-Homepage.PNG";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import $ from 'jquery';

export const Projects = () => {
  const projects = [
    {
      title: "Riverside Homepage",
      description: "HTML, CSS, JS, PHP, and Wordpress",
      imgUrl: RiversideHome,
      linkTo: "https://www.riversidemfg.com/",
    },
    {
      title: "McKesson Homepage",
      description: "HTML, CSS, JS, PHP, and Wordpress",
      imgUrl: MckesssonHome,
      linkTo: "https://www.mckesson.com/",
    },
    {
      title: "Business Startup",
      //description: "Design & Development",
      imgUrl: projImg3,
      linkTo: "https://www.riversidemfg.com/",
    },
    // ... other projects
  ];

  useEffect(() => {
    // Function to adjust image heights
    const adjustImageHeights = () => {
      $('.projectIMG').each(function () {
        var imgWidth = $(this).width();
        var minDesiredHeight = imgWidth * 0.8; // 20% less than the width
        var maxDesiredHeight = imgWidth * 0.9; // 20% less than the width
        $(this).css('min-height', minDesiredHeight + 'px');
        $(this).css('max-height', maxDesiredHeight + 'px');
      });
    };

    // Call the function when the component mounts
    adjustImageHeights();

    // Optionally, you can add a resize event listener to adjust the heights on window resize
    window.addEventListener('resize', adjustImageHeights);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', adjustImageHeights);
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here is a collection of projects I have worked on to showcase my experience as a Web Developer. Click a project to get a better view</p><br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
