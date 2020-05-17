import React from 'react';
import styled from 'styled-components';
import icon from '@/assets/images/logo.png';
import Path, { PathInfo } from '@/routes/Path';
import Menu from './Menu';

const Header: React.FC = () => {
  const items: PathInfo[] = Object.values(Path).map(v => {
    return v;
  });
  return (
    <header>
      <Wrapper>
        <Menu items={items} />
        <Icon />
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

const Icon = styled.div`
  display: block;
  height: 64px;
  padding: 0 10vw;
  &::before {
    content: url(${icon});
    height: auto;
  }
`;

export default Header;
