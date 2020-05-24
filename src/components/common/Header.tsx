import React from 'react';
import styled from 'styled-components';
import icon from '@/assets/images/logo.png';
import Path, { PathInfo } from '@/routes/Path';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import NavigationBar from './NavigationBar';

const Header: React.FC = () => {
  const items: PathInfo[] = Object.values(Path).map(v => {
    return v;
  });
  return (
    <header>
      <Wrapper>
        <Menu items={items} />
        <Icon to={Path.app.value} />
        <NavigationBar items={items} />
      </Wrapper>
    </header>
  );
};

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0000ff;
  background-color: #33333399;
  height: 70px;
  width: 100%;
  z-index: 10;
`;

const Icon = styled(Link)`
  display: block;
  height: 64px;
  z-index: 20;
  &::before {
    content: url(${icon});
    height: auto;
  }
  @media screen and (min-width: 769px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    position: absolute;
    left: calc(50vw - 32px);
  }
`;

export default Header;
