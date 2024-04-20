import React from 'react';
import meter1 from "../assets/img/met2.png";
import meter2 from "../assets/img/met2.png";
import meter3 from "../assets/img/met3.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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

  return (
    <section className="skill" id="skills" style={{ backgroundColor: '#bcb3cb' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>These are the skills that i possess With expertise in computer science, <br></br>I bring a versatile toolkit to any task. I am eager to leverage these abilities <br></br>to excel in my job.</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                customLeftArrow={<img src={arrow1} alt="Arrow" />}
                customRightArrow={<img src={arrow2} alt="Arrow" />}
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>C++/C,Python</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Database management</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Soft skills</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Leadership</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};