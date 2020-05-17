import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PathInfo } from '@/routes/Path';

type MenuProps = {
  items: PathInfo[];
};

const Menu: React.FC<MenuProps> = props => {
  const { items } = props;
  return (
    <Wrapper>
      {items.map((item: PathInfo) => {
        return (
          <Navigation key={item.value} to={item.value}>
            {item.name}
          </Navigation>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 10%;
  left: 3vw;
  width: 30%;
  height: 100%;
  z-index: 20;
`;

const Navigation = styled(Link)`
  display: block;
  color: red;
  font-size: 3vw;
  height: 5vh;
  margin: 1vh 1vw;
  width: 100%;
  z-index: 20;
`;

export default Menu;
