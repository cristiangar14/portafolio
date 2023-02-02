import React from 'react';
import {
 Nav, NavItem,
} from 'reactstrap';
import LinkNav from '../routerNavLink/LinkNav';
// eslint-disable-next-line import/no-extraneous-dependencies
import './menu.scss';

const Menu = () => {
    return (
      <Nav fill className="ml-auto menu" navbar>
        <NavItem>
          <LinkNav to="/">Inicio</LinkNav>
        </NavItem>
        <NavItem>
          <LinkNav to="/about">Acerca</LinkNav>
        </NavItem>
        <NavItem>
          <LinkNav to="/experience">Experiencia</LinkNav>
        </NavItem>
        <NavItem>
          <LinkNav to="/portfolio">Portafolio</LinkNav>
        </NavItem>
        <NavItem>
          <LinkNav to="/resources">Recursos</LinkNav>
        </NavItem>
        <NavItem>
          <LinkNav to="/contact">Contacto</LinkNav>
        </NavItem>
      </Nav>
    );
};

export default Menu;
