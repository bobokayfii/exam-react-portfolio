import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { useEffect, useState } from "react";
import { ROLE, USER_ID } from "../utils";
import { TOKEN } from "../const";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [skills, setSkills] = useState([]);
  const isAuthorized = localStorage.getItem(TOKEN) && ROLE !== "user";

  useEffect(() => {
    if (isAuthorized) {
      // Fetch skills data here
      fetchSkills();
    }
  }, [isAuthorized]);

  const fetchSkills = async () => {
    try {
      const response = await fetch(
        `https://ap-portfolio-backend.up.railway.app/api/v1/skills?user=${USER_ID}`
      );
      const responseData = await response.json();
      const data = responseData.data; // Access the nested data array
      console.log("Fetched skills data:", data);

      if (Array.isArray(data)) {
        setSkills(data); // Update skills state with fetched data
      } else {
        console.error("Fetched data is not an array of skills:", data);
      }
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1 style={{paddingBottom:"30px"}}>Skills Page</h1>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill) => (
                  <div key={skill._id}>
                    <h3>{skill.name}</h3>
                    {skill.percent}%
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
