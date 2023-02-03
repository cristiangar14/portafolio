import React from 'react';
import { Container } from 'reactstrap';
import { Phone, Envelope, CCircle } from 'react-bootstrap-icons';

import './footer.scss';

const Footer = () => {
    return (
      <div className="footer">
        <Container fluid className="footer--container">
          <div className="footer--left">
            <div className="">
              <a href="/">
                <h2>Descarga mi CV</h2>
              </a>
            </div>
          </div>
          <div className="footer--right">
            <div className="">
              <h2>Contáctame</h2>
              {/* TODO agregar archivo apra descarga */}
              <a href="documento.pdf" download="mi-archivo.pdf">
                <Phone size={30} />
                <p>+57 3178356463</p>
              </a>
              <a href="mailto:desarrollo.cristian.garzon@gmail.com">
                <Envelope size={30} />
                <p>desarrollo.cristian.garzon@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="footer--copy">
            <p>
              Todos los derechos reservados
              <span><CCircle size={15} /></span>
            </p>
          </div>
        </Container>
      </div>
    );
};

export default Footer;
