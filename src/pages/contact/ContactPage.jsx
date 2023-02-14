import { Container } from '@mui/material';
import React from 'react';
import { EnvelopeAtFill, PhoneFill } from 'react-bootstrap-icons';
import ContactFormContainer from '../../components/containers/contactFormContainer/ContactFormContainer';
import SocialMedia from '../../components/containers/socialMedia/SocialMedia';

import './contactPage.scss';

const ContactPage = () => {
    return (
      <Container className="contact">
        <h1>Contactame</h1>
        <div className="contact--container">
          <div className="contact--form">
            <ContactFormContainer className="" />
          </div>
          <div className="contact--info">
            <div className="">
              <a href="tel:+573178356463" target="_blank" rel="noreferrer">
                <PhoneFill size={30} />
                <p>+57 3178356463</p>
              </a>
              <a href="mailto:desarrollo.cristian.garzon@gmail.com" target="_blank" rel="noreferrer">
                <EnvelopeAtFill size={30} />
                <p>desarrollo.cristian.garzon@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="contact--social">
            <SocialMedia className="" />
          </div>
        </div>
      </Container>
    );
};

export default ContactPage;
