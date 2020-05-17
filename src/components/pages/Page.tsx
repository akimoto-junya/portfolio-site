import React, { ReactElement } from 'react';
import GlobalCounter from '@/containers/common/GlobalCounter';
import HooksCounter from '@/components/common/HooksCounter';

const Page: React.FC = (): ReactElement => {
  return (
    <div>
      <header className="App-header">
        <p>page1</p>
        <GlobalCounter />
        <HooksCounter />
      </header>
    </div>
  );
};

export default Page;
