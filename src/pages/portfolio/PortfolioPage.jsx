import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Container } from '@mui/system';
import { onValue, ref } from 'firebase/database';
import CardItem from '../../components/pure/cardItem/CardItem';

import './portfolioPage.scss';
import db from '../../../firebase';
import Loader from '../../components/pure/loader/Loader';

const initialStateLoading = {
  dataLoading: true,
};
const PortfolioPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(initialStateLoading);

    useEffect(() => {
      setLoading({ dataLoading: true });
      const startAboutText = ref(db, '/portfolio');
      onValue(startAboutText, (snapshot) => {
          setData(snapshot.val());
          setLoading({ dataLoading: false });
        });
    }, []);

    return loading.dataLoading
    ? (
      <Loader />
    )
    : (
      <Container className="portfolio">
        <h2>Portafolio</h2>
        <ul className="portfolio--list">
          {
            data.map((el) => {
              return (
                <li key={`card-${el.id}`}>
                  <CardItem data={el} />
                </li>
              );
            })
          }
        </ul>
      </Container>
    );
};

export default PortfolioPage;
