import { push, ref } from 'firebase/database';
import React, { useState } from 'react';
import db from '../../../../firebase';
import ContactForm from '../../pure/contactForm/ContactForm';

const ContactFormContainer = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendEmail = (values) => {
    setLoading(true);
    setSuccess(true);

    push(ref(db, 'emails/'), {
      email: values.email,
      name: values.name,
      message: values.message,
      subject: values.subject,
    }).then(() => {
      setSuccess(true);
      setLoading(false);
    })
    .catch(() => {
      setSuccess(false);
      setLoading(false);
    });
  };

  return <ContactForm success={success} loading={loading} sendEmail={sendEmail} />;
};

export default ContactFormContainer;
