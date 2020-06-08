import React, { ReactElement } from 'react';
import works from '@/resources/Work';

const Works: React.FC = (): ReactElement => {
  return (
    <div>
      <div>works</div>
      <ul>
        {works.map(work => {
          return (
            <li key={work.title}>
              {work.title}
              <br />
              {work.detail}
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Works;
