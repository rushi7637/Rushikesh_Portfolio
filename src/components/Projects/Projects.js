import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://mitaoe.ac.in/assets/images/College-Right-side-view.webp"}
              isBlog={false}
              title="Student Portal"
              description="Developed Student Portal web application using React.js and Spring Boot microservices, with 
              MySQL for database management. Orchestrated multiple microservices to handle various Functionilites including user 
              management and external service interaction. ."
              ghLink="https://github.com/rushi7637/Acedamic-Nexa"
              demoLink="https://main--academicnexa.netlify.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://cdn.vectorstock.com/i/1000x1000/29/69/online-banking-application-vector-37162969.webp"}
              isBlog={false}
              title="Banking Application"
              description="developed a web application frontend using React.js, while managing data with 
              Spring boot. Leveraged MySQL for database operations. Implemented features  including user authentication, deposit, and credit services."
              ghLink="https://github.com/rushi7637/Banking-application"
              demoLink="https://main--rushi-bank.netlify.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://www.graduhat.com/static/media/graphic1.35242396.png"}
              isBlog={false}
              title="College Predictor"
              description="Developed College Predictor an application to assist students in predicting colleges 
              based on their entrance exam ranks. Utilized HTML and CSS for the frontend design, providing an intuitive user interface.
              Implemented backend functionality using Node.js to process student inputs and 
generate college predictions. "
              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={love}
              isBlog={false}
              title="Love-Link"
              description="A web application that leverages pure WebRTC protocal, Google Firestore as a signaling server, and Chromium Tab sharing protocal to allow screen sharing with audio, which enable the ability for folks to catch up and enjoy music and videos together despite the distance."
              ghLink="https://github.com/rak3xh/love-link"
              demoLink="https://love-link.vercel.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio Website"
              description="It is a portfolio website designed for web developers to showcase their projects to tell about themselves and if anyone wants to hire them."
              ghLink="https://github.com/rak3xh/Portfolio-React"
              demoLink="https://rak3xh-portfolio.vercel.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dict}
              isBlog={false}
              title="Dictionary-n-Pronouncer"
              description="A Web apllication developed to work as a dictionary and prouncer for any meaningful word in English Vocabulary, day and night mode features are also given. "
              ghLink="https://github.com/rak3xh/Dictionary-n-Pronouncer"
              demoLink="https://incredible-torrone-c19f4f.netlify.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ispo}
              isBlog={false}
              title="Ispotifyy-Music-App"
              description="A Web apllication developed for listening music according to your playlist with all the music control and volume control features. The website is responsive for all platform devices and can dynamically fetch and play songs that are stored in the libraries."
              ghLink="https://github.com/rak3xh/ispotifyy-music-app"
              demoLink="https://ispotifyy-music-app.vercel.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weath}
              isBlog={false}
              title="Know-The-Weather"
              description="A Web apllication developed to show the weather of a city which is located anywhere in the world alongside with next seven days forecasting ability and all the necessary details like UV Index, AQI Index, etc. "
              ghLink="https://github.com/rak3xh/know-the-weather"
              demoLink="https://know-the-weather-rak3xh.vercel.app/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
