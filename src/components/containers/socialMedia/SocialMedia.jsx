import React from 'react';
import {
 Facebook, Github, Instagram, Linkedin,
} from 'react-bootstrap-icons';

import './socialmedia.scss';

const SocialMedia = () => {
    return (
      <div className="socialMedia">
        <a href="https://linkedin.com/in/cristian-garzon-sanchez" target="_blank" rel="noreferrer">
          <Linkedin className="socialMedia--icon" />
          Linkedin
        </a>
        <a href="https://github.com/cristiangar14" target="_blank" rel="noreferrer">
          <Github className="socialMedia--icon" />
          Github personal
        </a>
        <a href="https://linkedin.com/in/cristian-garzon-sanchez" target="_blank" rel="noreferrer">
          <Facebook className="socialMedia--icon" />
          Facebook
        </a>
        <a href="https://instagram.com/cristiangar16?igshid=ZDdkNTZiNTM=" target="_blank" rel="noreferrer">
          <Instagram className="socialMedia--icon" />
          Instagram
        </a>
      </div>
    );
};

export default SocialMedia;
