import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={"https://miro.medium.com/max/875/1*hSHSLjaXwwI9N6ozdkgacg.png"}
              isBlog={false}
              title="Nordstormrack Clone"
              description="Online shopping platform of nordstorm.com build with HTML, CSS, and JavaScript. Have features which allows user to login/signup, 
              add product to cart/wishlist and mandated login before visiting checkout page.|| Techstack: HTML, CSS, JavaScript, Git ||"
              ghLink="https://github.com/PrathyushNair/Nord_clone"
              demoLink="https://quiet-crepe-a6deeb.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://miro.medium.com/max/875/1*47DtGI0LINBeAY9Aj7S3sw.png"}
              isBlog={false}
              title="Modesens Clone"
              description="Modesens is an online platform that acts as a shopping assistant to users. Build using React.js, Redux, Chakra UI and CSS. Data for this project has been scrapped 
              from the original website. This enabled us to pupolate the json server.  || Techstack: React, Redux, Chakra UI, CSS, Git ||"
              ghLink="https://github.com/Deepumandal/Modesens"
              demoLink="https://magnificent-bublanina-64e24e.netlify.app/"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={"https://miro.medium.com/max/875/1*VcjMyZBiAub5CABDHJhPww.jpeg"}
              isBlog={false}
              title="Toymarche Clone"
              description="An online platform for purchasing toys.This website ids build using HTML, CSS and JavaScript.
              Functionalities include login/signup, add to cart/wishlist
              and checkout page. || Techstack: HTML, CSS, JavaScript, Git ||"
              ghLink="https://github.com/PrathyushNair/ToyMarche_clone"
              demoLink="https://62488c87db897540a8152398--subtle-centaur-57e7a8.netlify.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
