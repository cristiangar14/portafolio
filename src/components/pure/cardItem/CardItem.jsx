import React from 'react';
import { Link } from 'react-router-dom';

import './cardItem.scss';

const CardItem = () => {
    return (
      <Link to="/" className="smallCard">
        <div className="smallCard--container">
          <div className="smallCard--image">
            <img src="https://picsum.photos/800/600?random=1" alt="reandom" />
          </div>
          <div className="smallCard--content">
            <h4>Card title</h4>
            <h5>Card subtitle</h5>
            <p>texto jdsbfj jsdaafjkasbdf jbsdfkbasdf jsdbfkjasnfdkmas df ndsjfbsdjafb</p>
            <p className="smallCard--details">Ver mas...</p>
          </div>
        </div>
      </Link>

    );
};

export default CardItem;
