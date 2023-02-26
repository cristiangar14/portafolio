import React from 'react';
import { Phone, Envelope, CCircle } from 'react-bootstrap-icons';

import './footer.scss';

const Footer = () => {
    return (
      <div className="footer">
        <div className="footer--container">
          <div className="footer--left">
            <div className="footer--btn__cv">
              <a href="https://firebasestorage.googleapis.com/v0/b/cristian-garzon-dev.appspot.com/o/assets%2Fcv.pdf?alt=media&token=8dc79c83-13ba-482d-a092-e95f2079c69c" target="_blank" rel="noreferrer">
                <h2>Descarga mi CV</h2>
              </a>
            </div>
          </div>
          <div className="footer--right">
            <div className="">
              <h2>Contáctame</h2>
              {/* TODO agregar archivo apra descarga */}
              <a href="tel:+573178356463" target="_blank" rel="noreferrer">
                <Phone size={30} />
                <p>+57 3178356463</p>
              </a>
              <a href="mailto:desarrollo.cristian.garzon@gmail.com" target="_blank" rel="noreferrer">
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
        </div>
      </div>
    );
};

export default Footer;
