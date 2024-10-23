import React, { useEffect } from "react";
import "./Home.css";

function Home() {
  useEffect(() => {
    const cartoonImg = document.querySelector(".moving-cartoon");
    let directionX = 1;
    let directionY = 1;
    let yPosition = 0;

    const moveCartoon = () => {
      const currentLeft = parseInt(window.getComputedStyle(cartoonImg).left, 10) || 0;
      const newLeft = currentLeft + (100 * directionX);

      yPosition += 2 * directionY;

      if (
        newLeft > document.querySelector(".cartoon").offsetWidth - cartoonImg.offsetWidth ||
        newLeft < 0
      ) {
        directionX *= -1;
      }

      // เปลี่ยนขอบเขตการเคลื่อนไหว
      if (yPosition > 40 || yPosition < -40) {
        directionY *= -1;
      }

      cartoonImg.style.left = `${newLeft}px`;
      cartoonImg.style.top = `${yPosition}px`;
    };

    const intervalId = setInterval(moveCartoon, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div className="container">
        <div className="profile">
          <img
            className="profile-img"
            src="images/Human.jpeg"
            alt="My Photo"
          />
          <div className="info">
            <h1 className="profile-name">Nicha Wanwon</h1>
            <h2 className="about-me">About Me</h2>
            <p>
              I am a student in the Computer Science and Software Development
              Innovation program.
            </p>
            <h2 className="skills">Skills</h2>
            <p>HTML, CSS, JavaScript, Figma</p>
            <h2 className="education">Education</h2>
            <p>Currently studying at Sripatum University, Bangkok.</p>
          </div>
        </div>
        <div className="lower-section">
          <div>
            <h2 className="projects">Projects and Portfolio</h2>
            <ul>
              <li>Project EMPEROR (E-commerce website).</li>
              <li>IV VAN (Van booking website).</li>
              <li>Tree Heart (Volunteer activities website).</li>
              <li>Current project: Parking search system.</li>
            </ul>
          </div>
          <div>
            <h2 className="academic-interests">Academic Interests</h2>
            <ul>
              <li>UX/UI Design</li>
              <li>Web Development</li>
            </ul>
          </div>
          <div>
            <h2 className="extracurricular">Extracurricular Activities</h2>
            <ul>
              <li>
                Internship at a police station as an administrative officer.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="hobbies">Interests and Hobbies</h2>
            <ul>
              <li>Reading English stories and novels to practice language skills.</li>
            </ul>
          </div>
        </div>
        <div className="cartoon">
          <img
            className="moving-cartoon"
            src="images/large.jpeg"
            alt="Cartoon"
            style={{ position: "absolute", left: "0px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
