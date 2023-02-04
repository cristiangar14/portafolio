import React from 'react';
import { Container } from 'reactstrap';
import BigCard from '../../components/pure/bigCard/BigCard';
import { dataExperiences } from '../../mocks/experience.mocks';

import './experiencePage.scss';

const ExperiencePage = () => {
    return (
      <Container className="experience">
        <h2>Experiencia IT</h2>
        <div className="experience--conatainer">
          {
            dataExperiences.map((el) => (
              <BigCard key={`experience-${el.id}`} data={el} />
            ))
          }
        </div>
      </Container>
    );
};

export default ExperiencePage;
