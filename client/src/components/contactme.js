import React from "react";
import { connect } from "react-redux";
import { sendMessage } from "../action";

class Contact extends React.Component {
  state = {
    message: {
      subject: "",
      text: "",
      phone: ""
    }
  };
  handleSubject(e) {
    this.setState({
      message: { ...this.state.message, subject: e.target.value }
    });
  }
  handleText(e) {
    this.setState({ message: { ...this.state.message, text: e.target.value } });
  }
  handlePhone(e) {
    this.setState({
      message: { ...this.state.message, phone: e.target.value }
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      subject: "",
      text: "",
      phone: ""
    });
  }
  render() {
    if (this.props.message === null) {
      return (
        <div className="contact-me" id="contactme">
          <h1 className="contact-me-h1">Contact Me</h1>
          <div className="contact-me-div">
            <p style={{ textAlign: "left" }}>Phone#</p>
            <textarea
              type="number"
              className="contact-me-subject"
              value={this.state.phone}
              onChange={e => {
                this.handlePhone(e);
              }}
            />
            <p style={{ textAlign: "left" }}>Subject:</p>
            <textarea
              className="contact-me-subject"
              value={this.state.subject}
              onChange={e => {
                this.handleSubject(e);
              }}
            />
            <p style={{ textAlign: "left" }}>Message:</p>
            <textarea
              className="contact-me-textfield"
              value={this.state.text}
              onChange={e => {
                this.handleText(e);
              }}
            />
            <button
              className="contact-me-button"
              onClick={e => {
                this.handleSubmit(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="message-sent">{this.props.message.message}</h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    message: state.message
  };
};

const ContactContainer = connect(
  mapStateToProps,
  { sendMessage }
)(Contact);
export default ContactContainer;
