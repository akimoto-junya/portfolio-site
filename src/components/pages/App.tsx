import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Path from '@/routes/Path';
import Cover from '@/components/common/Cover';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <Cover />
      <PageLink to={Path.about.value}>Page</PageLink>
    </div>
  );
};

const PageLink = styled(Link)`
  color: #000;
  margin-top: 30px;
`;

export default App;
