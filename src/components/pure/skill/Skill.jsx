import { Tooltip } from '@mui/material';
import React, { forwardRef } from 'react';

import './skill.scss';

const Skill = ({ data }) => {
    const target = `skill${data.id}`;

    // eslint-disable-next-line react/no-unstable-nested-components
    const Skl = forwardRef((props, ref) => {
      //  Spread the props to the underlying DOM element.
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading, react/button-has-type
        <button {...props} ref={ref} className="skill">
          <img className="skill--logo" src={data.logo} alt={data.title} />
          <p id={target}>
            {data.title}
          </p>
        </button>
      );
    });

  return (
    <Tooltip title={data.description} enterTouchDelay={0} enterDelay={0} leaveDelay={0} arrow>
      <Skl />
    </Tooltip>
  );
};

Skill.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'right', 'bottom'],
  },
};

export default Skill;
