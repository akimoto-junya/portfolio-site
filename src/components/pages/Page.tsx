import React, { ReactElement } from 'react';
import Path from '@/routes/Path';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GlobalCounter from '@/containers/common/GlobalCounter';
import HooksCounter from '@/components/common/HooksCounter';

const Page: React.FC = (): ReactElement => {
  return (
    <div>
      <header className="App-header">
        <p>page1</p>
        <PageLink to={Path.app}>prev</PageLink>
        <GlobalCounter />
        <HooksCounter />
      </header>
    </div>
  );
};

const PageLink = styled(Link)`
  color: #000;
  margin-top: 30px;
`;

export default Page;
