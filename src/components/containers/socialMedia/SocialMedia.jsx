import React from 'react';
import {
 Facebook, Github, Instagram, Linkedin,
} from 'react-bootstrap-icons';

import './socialmedia.scss';

const SocialMedia = () => {
    return (
      <div className="socialMedia">
        <a href="www.linkedin.com/in/cristian-garzon-sanchez" target="_blank">
          <Linkedin className="socialMedia--icon" />
          Linkedin
        </a>
        <a href="www.github.com/cristiangar14" target="_blank">
          <Github className="socialMedia--icon" />
          Github personal
        </a>
        <a href="www.linkedin.com/in/cristian-garzon-sanchez" target="_blank">
          <Facebook className="socialMedia--icon" />
          Facebook
        </a>
        <a href="www.instagram.com/cristiangar16?igshid=ZDdkNTZiNTM=" target="_blank">
          <Instagram className="socialMedia--icon" />
          Instagram
        </a>
      </div>
    );
};

export default SocialMedia;
