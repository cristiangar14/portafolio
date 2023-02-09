import React from 'react';
import { Link } from 'react-router-dom';

import './cardItem.scss';

const CardItem = ({ data }) => {
    return (
      <Link to={`/portfolio/${data.id}`} className="smallCard">
        <div className="smallCard--container">
          <div className="smallCard--image">
            <img src="https://picsum.photos/800/600?random=1" alt="reandom" />
          </div>
          <div className="smallCard--content">
            <h4>{data.title}</h4>
            <h5>{data.subtitle}</h5>
            <p>{data.shortDescription}</p>
            <p className="smallCard--details">Ver mas...</p>
          </div>
        </div>
      </Link>

    );
};

export default CardItem;
