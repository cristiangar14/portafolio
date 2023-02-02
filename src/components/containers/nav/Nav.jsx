import React, { useState } from 'react';
import {
  Navbar, NavbarToggler, Collapse,
 } from 'reactstrap';
import Menu from '../../pure/menu/Menu';

import './nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="nav" light expand="md">
      <NavbarToggler className={`nav--btn ${isOpen ? 'nav-open' : ''}`} onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Menu />
      </Collapse>
    </Navbar>
    );
};

export default Nav;
