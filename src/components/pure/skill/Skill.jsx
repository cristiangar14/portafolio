import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

import './skill.scss';

const Skill = ({ data }) => {
    const target = `skill${data.id}`;
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div className="skill">
      <img className="skill--logo" src={data.logo} alt={data.title} />
      <p id={target}>
        {data.title}
      </p>
      <Tooltip
        autohide
        flip
        isOpen={tooltipOpen}
        target={target}
        toggle={toggle}
      >
        {data.description}
      </Tooltip>
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
