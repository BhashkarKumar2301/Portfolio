import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Amazon_Clone from "../../Assets/Projects/Amazon_Clone.png";
import Chat_app from "../../Assets/Projects/Chat_app.png";
import AI_VIRTUAL_Therapist from "../../Assets/Projects/AI_VIRTUAL_Therapist.png";
import Job_portal from "../../Assets/Projects/Job_portal.png";
import gender_age_detection from "../../Assets/Projects/gender_age_detection.png";

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
              imgPath={AI_VIRTUAL_Therapist}
              isBlog={false}
              title="AI Virtual Therapist"
              description="The AI Virtual Therapist is an intelligent conversational agent designed to simulate therapeutic conversations using natural language processing (NLP) and machine learning. It provides mental health support through empathetic dialogue, mood tracking, and guided self-reflection, acting as a first line of emotional assistance for users."
              ghLink="https://github.com/BhashkarKumar2301/AI-Therapist"
              demoLink="https://ai-therapist-87bb.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gender_age_detection}
              isBlog={false}
              title="gender-age-detection"
              description="A computer vision project that detects a person's gender and age group in real-time using Python and OpenCV. The system uses pre-trained deep learning models to analyze facial features from live video or image input and accurately classify gender and estimate age range."
              ghLink="https://github.com/BhashkarKumar2301/gender-age-detection"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat_app}
              isBlog={false}
              title="Chat-App"
              description="A full-stack real-time chat application built using the MERN stack, enabling users to engage in one-on-one and group conversations with instant message delivery, typing indicators, and online user status. The app ensures a smooth, real-time communication experience through efficient WebSocket integration."
              ghLink="https://github.com/BhashkarKumar2301/Chat_app"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="A fully responsive and interactive personal portfolio website built using React.js. It showcases my skills, projects, resume, and contact information in a modern, user-friendly interface. Designed to highlight my profile to recruiters and collaborators.A fully responsive and interactive personal portfolio website built using React.js. It showcases my skills, projects, resume, and contact information in a modern, user-friendly interface. Designed to highlight my profile to recruiters and collaborators."
              ghLink="https://github.com/BhashkarKumar2301/Portfolio"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Job_portal}
              isBlog={false}
              title="Job_portal"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/BhashkarKumar2301/Job_portal"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon_Clone}
              isBlog={false}
              title="Amazon_Clone"
              description="A front-end clone of the Amazon e-commerce website created using HTML, CSS, and JavaScript. The project replicates the core UI of Amazon, including the homepage layout, product listings, navigation bar, and basic interactivity."
              ghLink="https://github.com/BhashkarKumar2301/Amazon_clone"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
