import React from "react";

export default class AboutMe extends React.Component {
  render() {
    return (
      <div className="aboutme">
        <h1 className="aboutme-header">About Me</h1>
        <p className="aboutme-p">
          I was born in Austin, Texas. I was in the United States Army for 7
          years. After serving my country I decides that I would go back to
          school and earn my degree.
        </p>
        <br />
        <p className="aboutme-p" id="aboutme">
          I graduated from South University with as a Bachelor of Science in
          Information Technology. I also attended Austin Coding Academy where I
          learned Full Stack Javascript Development.{" "}
        </p>
        <br />
        <p className="aboutme-p">
          I currently work at the IRS as a Information Technology Specialist and
          at Austin Coding Academy as a TA/Tutor. I have currently help over 50
          students succeed in passing with curriculum.{" "}
        </p>
        <br />
        <p className="aboutme-p">
          My Passion: is to become a great developer, I enjoy learning new
          technologies. My hobbies: are playing basketball, gaming,
          weight-lifting, watch movies and studying.
        </p>
      </div>
    );
  }
}
