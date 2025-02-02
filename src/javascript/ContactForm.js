import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateForm = (e) => {
    const newErrors = { name: '', email: '', message: '' };

    // Check if name is empty
    if (!e.target.user_name.value) {
      newErrors.name = 'Name is required';
    }

    // Check if email is valid
    if (!e.target.user_email.value) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(e.target.user_email.value)) {
      newErrors.email = 'Email is invalid';
    }

    // Check if message is empty
    if (!e.target.message.value) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Return false if there are any errors
    return !Object.values(newErrors).some((error) => error);
  };

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    
    if (!validateForm(e)) return;

    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_3fj3dr9',
        'template_29g0xlt',
        e.target,
        'cD4qXu4kfEkeeyy8X'
      )
      .then(
        (result) => {
          setStateMessage({ text: 'Message sent!', type: 'success' });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage({ text: 'Something went wrong, please try again later', type: 'error' });
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2`}
        placeholder={errors.name || 'Enter your name'}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2`}
        placeholder={errors.email || 'Enter your email'}
      />
      <label>Message</label>
      <textarea
        name="message"
        className={`border ${errors.message ? 'border-red-500' : 'border-gray-300'} p-2`}
        placeholder={errors.message || 'Enter your message'}
      />
      <button type="submit" id="form_button" disabled={isSubmitting}>
        Send
      </button>
      
      {/* Display the alert with the appropriate color */}
      {stateMessage && (
        <p
          className={`message-sent ${
            stateMessage.type === 'error' ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {stateMessage.text}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
