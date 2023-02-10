import { Tooltip } from '@mui/material';
import React, { forwardRef } from 'react';

import './skill.scss';

const Skill = ({ data }) => {
    const target = `skill${data.id}`;

    // eslint-disable-next-line react/no-unstable-nested-components
    const Skl = forwardRef((props, ref) => {
      //  Spread the props to the underlying DOM element.
      return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props} ref={ref}>
          <img className="skill--logo" src={data.logo} alt={data.title} />
          <p id={target}>
            {data.title}
          </p>
        </div>
      );
    });

  return (
    <Tooltip title={data.description} className="skill" arrow placement="top-start">
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
