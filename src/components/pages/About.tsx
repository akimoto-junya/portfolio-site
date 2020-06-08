import React, { ReactElement } from 'react';
import styled from 'styled-components';

const About: React.FC = (): ReactElement => {
  return (
    <Wrapper className="about">
      <div>about</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: calc(100vh - 70px);
  width: 100%;
  margin: auto;
  background-color: #eeeeee;
`;

export default About;
