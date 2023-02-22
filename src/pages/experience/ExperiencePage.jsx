import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { Container } from '@mui/material';
import BigCard from '../../components/pure/bigCard/BigCard';
import db from '../../../firebase';
import './experiencePage.scss';
import Loader from '../../components/pure/loader/Loader';

const initialStateLoading = {
  experiencesLoading: false,
};

const ExperiencePage = () => {
  const [loading, setLoading] = useState(initialStateLoading);
  const [dataExperiences, setDataExperiences] = useState([]);

    useEffect(() => {
      setLoading({ experiencesLoading: true });
    const startAboutText = ref(db, '/experience');
    onValue(startAboutText, (snapshot) => {
        const data = snapshot.val();
        setDataExperiences(data);
        setLoading({ experiencesLoading: false });
      });
    }, []);

    return loading.experiencesLoading
    ? (
      <Loader />
    )
    : (
      <Container className="experience">
        <h1>Experiencia IT</h1>
        <div className="experience--conatainer">
          {
            dataExperiences.map((el) => (
              <BigCard key={`experience-${el.id}-${el.company}`} data={el} />
            ))
          }
        </div>
      </Container>
    );
};

export default ExperiencePage;
