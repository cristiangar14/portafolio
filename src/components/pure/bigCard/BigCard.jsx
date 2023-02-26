import React from 'react';
import { Link } from 'react-router-dom';

import './bigCard.scss';

const BigCard = ({ data }) => {
    return (
      <div className="bigCard">
        <div className="bigCard--image">
          <img src={data.logo} alt={data.company} />
        </div>
        <div className="bigCard--content">
          <h3>{data.jobtitle}</h3>
          <h4>{data.company}</h4>
          <p>{data.dates}</p>
          <p>{data.summary}</p>
          <div className="bigCard--link">
            <Link to={`/experience/${data.id}`}>Ver mas...</Link>
          </div>
        </div>
      </div>
    );
};

export default BigCard;
