import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Path from '@/routes/Path';
import Cover from '@/components/common/Cover';
import About from './About';

const App: React.FC = (): ReactElement => {
  const items: number[] = Array.from({ length: 100 }, (v, k) => k);
  return (
    <div className="App">
      <Cover />
      <About />
      <PageLink to={Path.about.value}>Page</PageLink>
      {items.map((item: number) => {
        return <br key={item} />;
      })}
    </div>
  );
};

const PageLink = styled(Link)`
  color: #000;
  margin-top: 30px;
`;

export default App;
