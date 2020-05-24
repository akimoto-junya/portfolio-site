import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { PathInfo } from '@/routes/Path';

type NavigationProps = {
  items: PathInfo[];
};

const NavigationBar: React.FC<NavigationProps> = props => {
  const { items } = props;

  return (
    <Wrapper>
      <NavigationList>
        {items.map((item: PathInfo) => {
          return (
            <li key={item.value}>
              <Navigation to={item.value}>
                <NavigationText>{item.name}</NavigationText>
              </Navigation>
            </li>
          );
        })}
      </NavigationList>
    </Wrapper>
  );
};

const VisibilityMedia = css`
  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 50%;
  height: 100%;
  ${VisibilityMedia}
`;

const NavigationList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

const NavigationText = styled.div`
  color: #ffffff;
  font-size: 2vh;
  margin: 0 2vw;
  padding: 2px 0;
  &:hover {
    animation: hover-color 0.4s ease 0s 1 normal forwards;
    @keyframes hover-color {
      0% {
        border-bottom: thin solid #ffffff00;
      }
      100% {
        border-bottom: thin solid #ffffffff;
      }
    }
  }
`;

const Navigation = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  z-index: 20;
`;

export default NavigationBar;
