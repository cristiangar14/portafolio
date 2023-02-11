import React from 'react';

import './technology.scss';

const Technology = ({ tech }) => {
    return (
      <li className="technology">
        <img src={tech.logo} alt={tech.name} />
        <p>{tech.name}</p>
      </li>
    );
};

export default Technology;
