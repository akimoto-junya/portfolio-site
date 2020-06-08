import React from 'react';
import styled from 'styled-components';
import icon from '@/assets/images/logo_large.png';
import packageImg from '@/assets/images/package.svg';
import scrollImg from '@/assets/images/scroll_arrow.svg';

const ScrollToAbout = () => {
  const element = document.getElementsByClassName('about')[0];
  const rect = element.getBoundingClientRect();
  const top = rect.top + window.pageYOffset - 70;
  window.scrollTo({ top, left: 0, behavior: 'smooth' });
};

const Cover: React.FC = () => {
  return (
    <Wrapper>
      <Package src={packageImg} />
      <WhiteArrow>
        <ArrowBody>
          <Icon src={icon} />
          <Title>Package</Title>
        </ArrowBody>
        <ArrowHead />
      </WhiteArrow>
      <ScrollArrow src={scrollImg} onClick={ScrollToAbout} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  width: 100%;
  background-color: #00c2cb;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #00c2cb;
    animation: visiblize-arrow 1s ease 0s 1 normal forwards;
  }

  @keyframes visiblize-arrow {
    0% {
      transform: translateX(0) scaleX(1);
    }
    100% {
      transform: translateX(50%) scaleX(0);
    }
  }
`;

const WhiteArrow = styled.div`
  display: flex;
  padding: 30vh 0 0 0;
  height: 30vh;
  width: 100%;
`;

const ArrowBody = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  background-color: #ffffff;
`;

const Title = styled.div`
  font-family: Meiryo;
  display: block;
  text-align: center;
  color: #00c2cb;
  width: 30%;
  padding: 3vh 5vw;
  font-size: 5vw;
  animation: visiblize-title 2s ease 0s 1 normal forwards;

  @keyframes visiblize-title {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ArrowHead = styled.div`
  display: block;
  height: 170%;
  width: 20%;
  background: linear-gradient(to bottom left, transparent 50%, #ffffff 51%)
      no-repeat top left/100% 50.5%,
    linear-gradient(to top left, transparent 50%, #ffffff 51%) no-repeat bottom
      left/100% 50%;
  transform: translate(0, -20%);
`;

const Icon = styled.img`
  display: block;
  height: 70%;
  width: auto;
  padding: 0 10vw 0 10vw;
  animation: visiblize-title 2s ease 0s 1 normal forwards;
`;

const ScrollArrow = styled.img`
  display: block;
  height: 10vh;
  width: auto;
  margin: 10vh auto auto auto;
  cursor: pointer;
  animation-name: visiblize-title, bounce-scroll-arrow;
  animation-duration: 2s, 1s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, alternate;

  @keyframes bounce-scroll-arrow {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(1vh);
    }
  }
`;

const Package = styled.img`
  position: absolute;
  display: block;
  top: 5%;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 20%;
  padding: 0 2vw;
`;

export default Cover;
