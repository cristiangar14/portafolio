import React from 'react';
import Technology from '../../pure/technology/Technology';

import './technologies.scss';

const Technologies = ({ technologies }) => {
    return (
      <ul className="technologies--container">
        {
          technologies.map((el) => {
            return <Technology key={`technology-${el.id}`} tech={el} />;
          })
        }
      </ul>
    );
};

export default Technologies;
