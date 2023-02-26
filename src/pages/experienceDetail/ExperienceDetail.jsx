import { Container } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../../firebase';
import Loader from '../../components/pure/loader/Loader';

import './experienceDetail.scss';

const initialStateLoading = {
  experienceLoading: true,
};

const ExperienceDetail = () => {
    const params = useParams();
    const [loading, setLoading] = useState(initialStateLoading);
    const [data, setData] = useState({});

    useEffect(() => {
      setLoading({ experienceLoading: true });
      const startAboutText = ref(db, `/experience/${params.id}`);
      onValue(startAboutText, (snapshot) => {
        const getData = snapshot.val();
        setData(getData);
        setLoading({ experienceLoading: false });
      });
    }, []);

    return loading.experienceLoading
    ? (
      <Loader />
    )
    : (
      <Container className="experienceDetails">
        <div className="experienceDetails__company">
          <h1>{data.company}</h1>
          <div className="experienceDetails__image">
            <img src={data.logo} alt={data.company} />
          </div>
          <p>{data.companydescription}</p>
        </div>
        <div className="experienceDetails__functions">
          <h2>Funciones</h2>
          <p>{data.functions}</p>
        </div>
      </Container>
    );
};

export default ExperienceDetail;
