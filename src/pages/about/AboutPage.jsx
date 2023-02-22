import React, { useEffect, useState } from 'react';

import './aboutPage.scss';

import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import { ref, onValue } from 'firebase/database';
import Skill from '../../components/pure/skill/Skill';
import SocialMedia from '../../components/containers/socialMedia/SocialMedia';
import db from '../../../firebase';
import Loader from '../../components/pure/loader/Loader';

const initialStateLoading = {
  textAboutLoading: true,
  skillsLoading: true,
};

const AboutPage = () => {
  const [loading, setLoading] = useState(initialStateLoading);
  const [textsAbout, setTextsAbout] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setLoading({ textAboutLoading: true, skillsLoading: true });
    const startAboutText = ref(db, '/abouttexts');
    onValue(startAboutText, (snapshot) => {
        const data = snapshot.val();
        setTextsAbout(data);
        setLoading({ ...loading, textAboutLoading: false });
      });

    const startSkills = ref(db, '/skills');
    onValue(startSkills, (snapshot) => {
        const data = snapshot.val();
        setSkills(data);
        setLoading({ ...loading, skillsLoading: false });
      });
  }, []);

    return (
      <Container className="about">
        <div className="about--image">
          <img src="https://t4.ftcdn.net/jpg/03/32/23/29/240_F_332232901_5QMxfW9GadHG7Cg8dP3j2bCmRQxhfgob.jpg" alt="imagen prueba" />
        </div>
        <div className="about--text">
          <h1>Hola! Soy Cristian Garzón</h1>
          {
            loading.textAboutLoading
            ? (
              <Loader />
              )
            : (
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
            )
          }

          <p>
            Si desea conocer más sobre mi experiencia y portafolio, por favor visite los menús de
            {' '}
            <Link to="/experience">Experiencia</Link>
            {' '}
            o
            {' '}
            <Link to="/portfolio">Portafolio.</Link>
          </p>
        </div>
        <div className="about--skills">
          <h3>Skills</h3>
          {
            loading.skillsLoading
            ? (
              <Loader />
              )
            : (
              <div className="about--skills_list">
                {
              skills.map((el) => {
                return <Skill key={`skill${el.id}`} data={el} />;
              })
            }
              </div>
            )
          }

        </div>
        <div className="about--social">
          <h3>Redes Sociales</h3>
          <SocialMedia />
        </div>
      </Container>
    );
};

export default AboutPage;
