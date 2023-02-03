import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import './linkNav.scss';

const LinkNav = ({ to, children }) => {
  return (
    <RouterNavLink to={to}>
      {children}
    </RouterNavLink>
  );
};

export default LinkNav;
