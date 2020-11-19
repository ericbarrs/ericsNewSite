import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import image from "../img/img1.jpg";

export default class Section extends React.Component {
	render() {
		return (
			<div className="section" id="Home">
				<div className="section-div">
					<h1 className="section-h1 aw-pulsate">
						My name is Eric and I'm a <br />
						Full Stack Javascript Developer
					</h1>
					<Link smooth className="aw-arrow" to="/#aboutme" />
				</div>

				<img
					src={image}
					alt="backgrond"
					style={{ display: "block", width: "100%" }}
				/>
				<div className="overlay" />
			</div>
		);
	}
}
