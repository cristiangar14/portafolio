import { ref, set } from 'firebase/database';
import React, { useState } from 'react';
import db from '../../../../firebase';
import ContactForm from '../../pure/contactForm/ContactForm';

const ContactFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const sendEmail = (values) => {
    setLoading(false);
    set(ref(db, 'emails/'), {
      email: values.email,
      name: values.name,
      message: values.message,
      subject: values.subject,
    })
    .then((data) => {
      // Data saved successfully!
      // eslint-disable-next-line no-console
      console.log(data);
    })
    .catch((error) => {
      // Data saved successfully!
      // eslint-disable-next-line no-console
      console.log(error);
    });
  };

  return <ContactForm loading={loading} sendEmail={sendEmail} />;
};

export default ContactFormContainer;
