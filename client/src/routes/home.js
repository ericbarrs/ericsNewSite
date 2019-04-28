import React, { Component } from "react";
import NavBar from "../components/navBar";
import AboutMe from "../components/aboutme";
import Footer from "../components/footer";
import Skills from "../components/skills";
import Contact from "../components/contactme";
import Section from "../components/section";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavBar />
        <Section />
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;
