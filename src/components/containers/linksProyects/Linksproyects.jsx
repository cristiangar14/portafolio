import React from 'react';
import { Link as LinkIcon } from 'react-bootstrap-icons';

import './linksProyects.scss';

const Linksproyects = ({ links }) => {
    return (
      <ul className="linksProyect">
        {
            links.map((el) => {
                return (
                  <li key={`link-proyect-${el.id}`}>
                    <a href={el.url} target="_blank" rel="noreferrer">
                      <LinkIcon className="linksProyect--icon" />
                      <p>{el.name}</p>
                    </a>
                  </li>
                );
            })
        }

      </ul>
    );
};

export default Linksproyects;
