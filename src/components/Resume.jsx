import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2 style={{ paddingTop: "30px" }}>Resume</h2>
          <p>
            It takes great pains to benefit. His needs result from something
            that actually drives him away. Let them be what they want. Anyone
            whom anyone desires. And no one who hinders receives the others.
            Because he should flee from the offices of convenience which he has
            here.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Ergashev Daler</h4>
              <p>
                <em>
                  Highly skilled and motivated IT professional with 2+ years of
                  experience in software development, database management, and
                  network administration. Proficient in programming languages
                  such as Java Script and C++. Demonstrated ability to work in a
                  team environment and collaborate effectively with
                  cross-functional teams. Strong problem-solving skills and a
                  passion for staying up-to-date with emerging technologies.
                  Excellent communication and interpersonal skills.
                </em>
              </p>
              <ul>
                <li>123 Main Street, San Francisco, CA</li>
                <li>(90)-006-16-55</li>
                <li>ergashevdaler153@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Student </h4>
              <h5>2021</h5>
              <p>
                <em>Rochester Institute of Technology, Rochester, NY</em>
              </p>
              <p>
                In 2021, I was awarded a grant to pursue an MBA in Marketing at
                TSUOS, where I am currently enrolled. I am eager to learn from
                industry experts and gain practical experience through
                internships and projects. My goal is to leverage my education
                and skills to drive business growth for my future employers.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Junior Front End developer</h4>
              <p></p>
              <ul>
                <li>
                  I have yet to gain professional work experience as I have just
                  completed my English language course. However, I am eager to
                  apply my knowledge and skills in the field of marketing
                  through internships and projects during my MBA program. I am
                  confident that with dedication and hard work, I will be able
                  to contribute to the growth and success of future employers.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime tempore, voluptatem esse illo consequatur odio possimus
                  ut sed accusamus excepturi!
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Education 2</h4>
              <h5>2019 - 2023</h5>
              <p>
                <em>Stepping Stone Advertising, New York, NY</em>
              </p>
              <ul>
                <li>
                  In 2020-2021, I studied the Chinese language and have recently
                  started learning Korean in 2021. My current IELTS level is
                  beginner, but I am dedicated to improving my language skills
                  through continued practice and study. Additionally, I am
                  fluent in Russian as it is my native language. I believe that
                  being multilingual will be an asset in my future career
                  endeavors and allow me to connect with a diverse range of
                  individuals and cultures.
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
