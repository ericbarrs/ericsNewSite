import React from "react";
import Resume from "../files/BarrsEricDResume.pdf";
import { HashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="nav">
				<div className="navBar align-center d-flex justify-content-around">
					<div className="logo">EB</div>
					<ul className="links">
						<li>
							<Link smooth className="nav-links" to="/#Home">
								Home
							</Link>
						</li>
						<li>
							<Link smooth className="nav-links" to="/#aboutme">
								About Me
							</Link>
						</li>

						<li>
							<Link smooth className="nav-links" to="/#contactme">
								Contact Me
							</Link>
						</li>
						<li>
							<NavLink className="nav-links" to="/projects">
								Projects
							</NavLink>
						</li>
						<li>
							<a className="nav-links" href={Resume} download="Eric's Resume">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
