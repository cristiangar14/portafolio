import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'reactstrap';
import { getExperienceDetail } from '../../services/dataExperiences';

import './experienceDetail.scss';

const ExperienceDetail = () => {
    const params = useParams();

    const data = useMemo(() => (
        getExperienceDetail(params.id)
    ), [params.id]);

    return (
      <Container className="experienceDetails">
        <div className="experienceDetails__company">
          <div className="experienceDetails__image">
            <img src={data.logo} alt={data.company} />
          </div>
          <h2>{data.company}</h2>
          <p>{data.companyDescription}</p>
        </div>
        <div className="experienceDetails__functions">
          <h3>Funciones</h3>
          <p>{data.functions}</p>
        </div>
      </Container>
    );
};

export default ExperienceDetail;
