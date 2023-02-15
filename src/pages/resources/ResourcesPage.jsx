import { Container } from '@mui/material';
import React from 'react';
import SmallCard from '../../components/pure/cardSource/SmallCard';

import { resourcesData } from '../../mocks/resources.mocks';
import './resourcePage.scss';

const ResourcesPage = () => {
    return (
      <Container className="resources">
        <h1>Recursos</h1>
        <div className="resources--container">
          {
            resourcesData.map((el) => {
              return <SmallCard key={`sources-${el.id}`} data={el} />;
            })
          }
        </div>
      </Container>
    );
};

export default ResourcesPage;
