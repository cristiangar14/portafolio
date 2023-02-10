import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import './linkNav.scss';

const LinkNav = ({ to, children, cls }) => {
  return (
    <RouterNavLink className={cls} to={to}>
      {children}
    </RouterNavLink>
  );
};

export default LinkNav;
