import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { PathInfo } from '@/routes/Path';
import MenuImg from '@/assets/images/nav_button.svg';

type MenuProps = {
  items: PathInfo[];
};

const Menu: React.FC<MenuProps> = props => {
  const { items } = props;
  const [isOpen, setVisibility] = React.useState<boolean>(false);
  const [unClicked, setClicked] = React.useState<boolean>(true);
  const openMenu = (): void => {
    setClicked(false);
    setVisibility(true);
  };
  const closeMenu = (): void => {
    setVisibility(false);
  };
  const getvisibility = (): string => {
    let result = isOpen ? 'visible' : 'hidden';
    if (unClicked) {
      result += ' unclicked';
    }
    return result;
  };
  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setVisibility(false);
      setClicked(true);
    }
  });

  return (
    <>
      <MenuButton onClick={openMenu} />
      <MenuBody>
        <HiddenCover onClick={closeMenu} className={getvisibility()} />
        <MenuBar className={getvisibility()}>
          {items.map((item: PathInfo) => {
            return (
              <Navigation key={item.value} to={item.value}>
                <NavigationText>{item.name}</NavigationText>
              </Navigation>
            );
          })}
        </MenuBar>
      </MenuBody>
    </>
  );
};

const VisibilityMedia = css`
  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const MenuButton = styled.div`
  display: block;
  width: 30px;
  height: 26px;
  margin: 0 5vw;
  background: url(${MenuImg});
  background-size: contain;
  cursor: pointer;
  z-index: 19;
  ${VisibilityMedia}
`;

const MenuBody = styled.div`
  ${VisibilityMedia}
`;

const HiddenCover = styled.div`
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #55555599;
  z-index: 18;
  &.hidden {
    animation: fadeout-menu 0.2s ease 0s 1 normal forwards;
    @keyframes fadeout-menu {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        display: none;
      }
    }
  }
  &.visible {
    animation: fadein-menu 0.5s ease 0s 1 normal forwards;
    @keyframes fadein-menu {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  &.unclicked {
    display: none;
  }
`;

const MenuBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  top: 0;
  left: 0;
  width: auto;
  height: 100%;
  z-index: 20;
  &.hidden {
    animation: hide-menu-bar 0.4s ease 0s 1 normal forwards;
    @keyframes hide-menu-bar {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-38vw);
      }
    }
  }
  &.visible {
    animation: visiblize-menu-bar 0.4s ease 0s 1 normal forwards;
    @keyframes visiblize-menu-bar {
      0% {
        transform: translateX(-38vw);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
  &.unclicked {
    display: none;
  }
`;

const NavigationText = styled.div`
  color: #333333;
  font-size: 3vw;
`;

const Navigation = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  height: 5vh;
  padding: 2vh 4vw;
  margin: 0 0;
  width: 30vw;
  z-index: 20;
  background-color: #ffffff;
  transition: background-color all 0.7s ease 0s;
  &:hover {
    background: #d9d9d9;
  }
`;

export default Menu;
