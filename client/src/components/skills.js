import React from "react";

export default class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h1 className="skills-header">Skills</h1>
        <ul className="skills-ul">
          <li className="skills-list">
            <img
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="Mongo DB"
            />
            <h3 className="skills-h3">MongoDB</h3>
            <p>Proficent in using Mongo DB</p>
          </li>
          <li className="skills-list">
            <img
              src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
              alt="express"
            />
            <h3 className="skills-h3">Express.js</h3>
            <p>Proficent in using Express.js</p>
          </li>
          <li className="skills-list">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react"
            />
            <h3 className="skills-h3">React.js</h3>
            <p>Proficent in using React.js</p>
          </li>
          <li className="skills-list">
            <img
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="node"
            />
            <h3 className="skills-h3">Node.js</h3>
            <p>Proficent in using Node.js</p>
          </li>
        </ul>
      </div>
    );
  }
}
