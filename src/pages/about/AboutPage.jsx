import React from 'react';
import { Container } from 'reactstrap';

import './aboutPage.scss';

import { Link } from 'react-router-dom';
import { skillsData, textsAbout } from '../../mocks/about.mocks';
import Skill from '../../components/pure/skill/Skill';

const AboutPage = () => {
    return (
      <Container className="about">
        <div className="about--image">
          <img src="https://t4.ftcdn.net/jpg/03/32/23/29/240_F_332232901_5QMxfW9GadHG7Cg8dP3j2bCmRQxhfgob.jpg" alt="imagen prueba" />
        </div>
        <div className="about--text">
          <h2>Hola! Soy Cristian Garzón</h2>
          <div className="">
            {
              textsAbout.map((el) => {
                return (
                  <p key={el.id}>
                    {el.text}
                  </p>
                );
              })
            }
          </div>
          <p>
            Si desea conocer más sobre mi experiencia y portafolio, por favor visite los menús de
            {' '}
            <Link to="/experience">Experiencia</Link>
            {' '}
            o
            {' '}
            <Link to="/portfolio">Portafolio</Link>
            {' '}
            en mi perfil.
          </p>
        </div>
        <div className="about--skills">
          <h3>Skills</h3>
          <div className="about--skills_list">
            {
              skillsData.map((el) => {
                return <Skill key={`skill${el.id}`} data={el} />;
              })
            }
          </div>
        </div>
        <div className="about--social">
          <h3>Redes Sociales</h3>
        </div>
        <div className="about--certification">
          carrusel de certificaciones
        </div>
      </Container>
    );
};

export default AboutPage;
