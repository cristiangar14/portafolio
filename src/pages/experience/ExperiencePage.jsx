import React from 'react';
import BigCard from '../../components/pure/bigCard/BigCard';
import { dataExperiences } from '../../mocks/experience.mocks';

import './experiencePage.scss';

const ExperiencePage = () => {
    return (
      <div className="experience">
        <h2>Experiencia IT</h2>
        <div className="experience--conatainer">
          {
            dataExperiences.map((el) => (
              <BigCard key={`experience-${el.id}-${el.company}`} data={el} />
            ))
          }
        </div>
      </div>
    );
};

export default ExperiencePage;
