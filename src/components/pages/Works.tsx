import React, { ReactElement } from 'react';
import styled from 'styled-components';
import works from '@/resources/Work';

const Works: React.FC = (): ReactElement => {
  return (
    <div>
      <div>works</div>
      {works.map(work => {
        return (
          <Content key={work.title}>
            {work.title}
            <br />
            {work.detail}
            <br />
          </Content>
        );
      })}
    </div>
  );
};

const Content = styled.div`
  position: fixed;
  display: flex;
`;

export default Works;
