import { Container, ThemeProvider } from '@mui/material';
import React from 'react';
import ContactFormContainer from '../../components/containers/contactFormContainer/ContactFormContainer';
import SocialMedia from '../../components/containers/socialMedia/SocialMedia';
import theme from '../../theme';

import './contactPage.scss';

const ContactPage = () => {
    return (
      <Container className="contact">
        <h1>Contáctame</h1>
        <div className="contact--container">
          <div className="contact--form">
            <ThemeProvider theme={theme}>
              <ContactFormContainer className="" />
            </ThemeProvider>
          </div>
          <div className="contact--social">
            <SocialMedia className="" />
          </div>
        </div>
      </Container>
    );
};

export default ContactPage;
