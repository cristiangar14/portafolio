import { Container } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import SmallCard from '../../components/pure/cardSource/SmallCard';
import Loader from '../../components/pure/loader/Loader';

import './resourcePage.scss';

const initialStateLoading = {
  dataLoading: true,
};

const ResourcesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(initialStateLoading);

    useEffect(() => {
      setLoading({ dataLoading: true });
      const startAboutText = ref(db, '/resources');
      onValue(startAboutText, (snapshot) => {
          setData(snapshot.val());
          setLoading({ dataLoading: false });
        }, {
          onlyOnce: true,
        });
    }, []);

    return loading.dataLoading
    ? (
      <Loader />
    )
    : (
      <Container className="resources">
        <h1>Recursos</h1>
        <div className="resources--container">
          {
            data.map((el) => {
              return <SmallCard key={`sources-${el.id}`} data={el} />;
            })
          }
        </div>
      </Container>
    );
};

export default ResourcesPage;
