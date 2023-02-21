import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import {
  CircularProgress,
  Container,
  ThemeProvider,
} from '@mui/material';
import BigCard from '../../components/pure/bigCard/BigCard';
import db from '../../../firebase';
import theme from '../../theme';
import './experiencePage.scss';

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

    return (
      <Container className="experience">
        <h2>Experiencia IT</h2>
        {
          loading.experiencesLoading
          ? (
            <ThemeProvider theme={theme}>
              <CircularProgress />
            </ThemeProvider>
          )
          : (
            <div className="experience--conatainer">
              {
            dataExperiences.map((el) => (
              <BigCard key={`experience-${el.id}-${el.company}`} data={el} />
            ))
          }
            </div>
          )

        }
      </Container>
    );
};

export default ExperiencePage;
