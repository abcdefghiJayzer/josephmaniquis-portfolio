import React from "react";
import './../css/ContactMe.css'

class ContactMe extends React.Component { // Extend from React.Component
  render() {
    return (
      <div className=" pt-10 bg-neutral-900 mx-auto">
          <div className="contact">
          <div className="text-ne">
              <i class="fa-brands fa-github" ></i>
              <i class="fa-brands fa-facebook" ></i>
              <i class="fa-brands fa-x-twitter" ></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className="md:w-1/2 mx-auto">
              <h2>Let's work together!</h2>
              <form action="#" method="post" id="contact_form" onSubmit={(e) => e.preventDefault()}>
                <div className="name">
                  <label htmlFor="name"></label>
                  <input type="text" placeholder="Name" name="name" id="name_input" required />
                </div>
                <div className="email">
                  <label htmlFor="email"></label>
                  <input type="email" placeholder="E-mail"  name="email" id="email_input" required />
                </div>
                <div className="subject">
                  <label htmlFor="subject"></label>
                </div>
                <div className="message">
                  <label htmlFor="message"></label>
                  <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
                </div>
                <div className="submit">
                  <input type="submit" value="Submit" id="form_button" />
                </div>
              </form>
            </div>
          </div>
      </div>
    );
  }
}

export default ContactMe;
