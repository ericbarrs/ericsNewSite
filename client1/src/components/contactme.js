import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../action";

class Contact extends React.Component {
	state = {
		message: {
			subject: "",
			text: "",
			phone: "",
		},
	};
	handleSubject(e) {
		this.setState({
			message: { ...this.state.message, subject: e.target.value },
		});
	}
	handleText(e) {
		this.setState({ message: { ...this.state.message, text: e.target.value } });
	}
	handlePhone(e) {
		this.setState({
			message: { ...this.state.message, phone: e.target.value },
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.props.sendMessage(this.state.message);
		this.setState({
			message: {
				subject: "",
				text: "",
				phone: "",
			},
		});
	}
	render() {
		return (
			<div className="contact-me" id="contactme">
				{!!this.props.message && (
					<div>
						<h1 className="message-sent">{this.props.message.message}</h1>
					</div>
				)}
				<h1 className="contact-me-h1">Contact Me</h1>
				<div className="contact-me-div">
					<label style={{ textAlign: "left" }}>Phone#</label>
					<input
						type="number"
						className="contact-me-subject"
						placeholder="Phone"
						value={this.state.phone}
						onChange={(e) => {
							this.handlePhone(e);
						}}
					/>
					<label style={{ textAlign: "left" }}>Subject:</label>
					<input
						className="contact-me-subject"
						placeholder="Subject"
						value={this.state.subject}
						onChange={(e) => {
							this.handleSubject(e);
						}}
					/>
					<label style={{ textAlign: "left" }}>Message:</label>
					<textarea
						className="contact-me-textfield"
						placeholder="Message"
						value={this.state.text}
						onChange={(e) => {
							this.handleText(e);
						}}
					/>
					<button
						className="contact-me-button"
						onClick={(e) => {
							this.handleSubmit(e);
						}}
					>
						Submit
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		message: state.message,
	};
};

const ContactContainer = connect(mapStateToProps, { sendMessage })(Contact);
export default ContactContainer;
