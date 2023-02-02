import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
 Navbar, NavbarToggler, Nav, NavItem, Collapse,
} from 'reactstrap';
import './menu.scss';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <Navbar className="menu" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav fill className="ml-auto" navbar>
            <NavItem>
              <Link to="/">Inicio</Link>
            </NavItem>
            <NavItem>
              <Link to="/about">Acerca</Link>
            </NavItem>
            <NavItem>
              <Link to="/experience">Experiencia</Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio">Portafolio</Link>
            </NavItem>
            <NavItem>
              <Link to="/resources">Recursos</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contacto</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
};

export default Menu;
