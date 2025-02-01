import React from "react";
import './../css/ContactMe.css';
import ContactForm from '../javascript/ContactForm';

class ContactMe extends React.Component {
  render() {
    return (
      <div className="pt-10 bg-neutral-900 mx-auto">
        <div className="contact">
          {/* <div className="social-icons text-ne">
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div> */}
          <div className="md:w-1/2 text-white mx-auto">
            <h2>Let's work together!</h2>
            {}
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default ContactMe;
