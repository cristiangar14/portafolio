import React from 'react';

import './smallCard.scss';

const SmallCard = ({ data }) => {
    return (
      <div className="smallCard">
        <div className="smallCard--content">
          <h5>{data.title}</h5>
          <h6>{data.category}</h6>
          <p>{data.description}</p>
        </div>
        <div className="smallCard--link">
          <a href={data.url} target="_blank" rel="noreferrer">Ver mas...</a>
        </div>
      </div>
    );
};

export default SmallCard;
