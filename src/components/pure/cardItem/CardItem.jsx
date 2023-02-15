import React from 'react';
import { Link } from 'react-router-dom';

import './cardItem.scss';

const CardItem = ({ data }) => {
    return (
      <Link to={`/portfolio/${data.id}`} className="Card">
        <div className="Card--container">
          <div className="Card--image">
            <img src={data.shortImage.url} alt={data.shortImage.alt} />
          </div>
          <div className="Card--content">
            <h4>{data.title}</h4>
            <h5>{data.category}</h5>
            <p>{data.shortDescription}</p>
            <p className="Card--details">Ver mas...</p>
          </div>
        </div>
      </Link>

    );
};

export default CardItem;
