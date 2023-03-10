import { Container } from '@mui/material';
import React from 'react';

import './homePage.scss';

const HomePage = () => {
    return (
      <Container className="home">
        <div className="">
          <h1 className="home--name">Cristian Garzón Sanchez</h1>
          <h2 className="home--job">Frontend Developer</h2>
          <div className="home--container__resumen">
            <img className="home--image" src="https://firebasestorage.googleapis.com/v0/b/cristian-garzon-dev.appspot.com/o/perfil.webp?alt=media&token=b9ec6c05-20bc-4d7a-b5ad-a327e1ac0194" alt="imagen prueba" />
            <p>Soy un desarrollador frontend con más de 3 años de experiencia en construcción de aplicaciones web de alta calidad. Me especializo en JavaScript, API REST, experiencia del usuario y CLEAN CODE. Tengo conocimientos en diferentes frameworks/librerías como AngularJS, Angular 15, ReactJS, TypeScript, SASS, Bootstrap y Materialize. Trabajo de forma remota en la industria IT y colaboro en equipo. Estoy disponible para proyectos remotos y en busca de desafíos.</p>
          </div>
        </div>
      </Container>
    );
};

export default HomePage;
