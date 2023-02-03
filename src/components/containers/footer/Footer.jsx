import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import './footer.scss';

const Footer = () => {
    return (
      <div className="footer">
        <Container fluid="sm">
          <Row sm="2" xs="1">
            <Col>
              <div className="footer--left">
                <div className="">
                  Descaragr
                </div>
              </div>
            </Col>
            <Col>
              <div className="footer--right">
                <div className="">
                  contac
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="footer--copy">
              <p>Todos los derechos reservados</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Footer;
