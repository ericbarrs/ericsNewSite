import React from "react";
import GetCards from '../components/Getcards'
import { connect } from "react-redux";
import NavBar from "../components/navBar";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="projects">
          <h1 className="display-1 projects-h1">Projects</h1>
          <GetCards projects={this.props.myProjects} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    myProjects: state.myProjects
  };
};

const ProjectsContainer = connect(
  mapStateToProps,
  null
)(Projects);
export default ProjectsContainer;
