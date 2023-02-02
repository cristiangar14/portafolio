import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import './linkNav.scss';

const LinkNav = ({ to, children }) => {
  const activeClassName = window.location.pathname === to ? 'activeLinkNav' : '';

  return (
    <RouterNavLink to={to} className={activeClassName}>
      {children}
    </RouterNavLink>
  );
};

export default LinkNav;
