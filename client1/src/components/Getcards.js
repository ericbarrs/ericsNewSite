import React, { Component } from "react";

export default class GetCards extends Component {
	render() {
		if (this.props.projects !== null) {
			return (
				<div className="from-cards d-flex justify-content-around flex-wrap w-75 m-auto">
					{this.props.projects.map((project, index) => {
						return (
							<div
								className="card m-3"
								key={index}
								style={{
									width: "350px",
									maxHeight: "500px",
									minHeight: "480px",
								}}
							>
								<img
									src={project.image}
									className="card-img-top img-fluid"
									style={{ maxHeight: "200px", minHeight: "200px" }}
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title card-size">{project.name}</h5>
									<p className="card-link m-0">{project.description}</p>
									<a
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-primary d-block mt-4"
									>
										Go To {project.name}
									</a>
								</div>
							</div>
						);
					})}
				</div>
			);
		} else {
			return null;
		}
	}
}
