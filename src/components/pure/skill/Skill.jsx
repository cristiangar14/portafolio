import React from 'react';

import './skill.scss';

const Skill = ({ data }) => {
    const target = `skill${data.id}`;

  return (
    <div className="skill">
      <img className="skill--logo" src={data.logo} alt={data.title} />
      <p id={target}>
        {data.title}
      </p>
      <div>
        {data.description}
      </div>
    </div>
  );
};

Skill.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Skill;
