import React from 'react';
import { Link } from 'react-router-dom';

import './cardItem.scss';

const CardItem = ({ data }) => {
    return (
      <Link to={`/portfolio/${data.id}`} className="cardItem">
        <div className="cardItem--container">
          <div className="cardItem--image">
            <img src={data.shortImage.url} alt={data.shortImage.alt} />
          </div>
          <div className="cardItem--content">
            <h4>{data.title}</h4>
            <h5>{data.category}</h5>
            <p>{data.shortDescription}</p>
            <p className="cardItem--details">Ver mas...</p>
          </div>
        </div>
      </Link>

    );
};

export default CardItem;
