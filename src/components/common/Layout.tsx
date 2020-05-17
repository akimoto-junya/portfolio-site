import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import background from '@/assets/images/background.png';
import Header from './Header';

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Body>{children}</Body>
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Avenir', 'Helvetica Neue', 'Helvetica', 'Arial', 'Hiragino Sans',
      'ヒラギノ角ゴシック', YuGothic, 'Yu Gothic', 'メイリオ', Meiryo,
      'ＭＳ Ｐゴシック', 'MS PGothic';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(${background});
    background-attachment: fixed;
    background-repeat: repeat;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Body = styled.div`
  positon: block;
  padding: 70px 0 0 0;
  /* height: calc(100vh - 60px); */
`;

export default Layout;
