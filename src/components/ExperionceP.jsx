import React, { useEffect, useState } from 'react'
import { USER_ID } from '../utils'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ExperienceP = () => {
  const [experiences, setExperiences] = useState([])
  console.log(USER_ID);
  useEffect(() => {
    fetch(
      `https://ap-portfolio-backend.up.railway.app/api/v1/experiences?user[in]=${USER_ID}`
    )
      .then((response) => response.json())
      .then((data) => setExperiences(data.data));
      
  }, [])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  return (
    <div className="experience container">
      <h2>Experience</h2>
      {experiences.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          className="experience-slider"
        >
          {experiences.map((experience) => (
            <div key={experience._id}>
              <h3>{experience.workName}</h3>
              <p>{experience.companyName}</p>
              <p>{experience.description}</p>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          ))}
        </Carousel>
      ) : (
        <div>No experiences to display.</div>
      )}
    </div>
  );
}

export default ExperienceP