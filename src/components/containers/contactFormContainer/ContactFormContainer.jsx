import React from 'react';
import ContactForm from '../../pure/contactForm/ContactForm';

const ContactFormContainer = () => {
  const sendEmail = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  return <ContactForm loading={false} sendEmail={sendEmail} />;
};

export default ContactFormContainer;
