import { Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import './cardItem.scss';

const CardItem = ({ data }) => {
    return (
      <Link to={`/portfolio/${data.id}`} className="cardItem">
        <Card sx={{ maxWidth: 345 }} className="cardItem--container">
          {/* <div className="cardItem--image"> */}
          <CardMedia
            sx={{ height: 180 }}
            image={data.shortImage.url}
            title={data.shortImage.alt}
          />
          {/* </div> */}
          <CardContent className="cardItem--content">
            <div className="">
              <h4>{data.title}</h4>
              <h5>{data.category}</h5>
              <p>{data.shortdescription}</p>
            </div>
            <div className="">
              <p className="cardItem--details">Ver mas...</p>
            </div>
          </CardContent>
        </Card>
      </Link>

    );
};

export default CardItem;
