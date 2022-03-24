import React, { ReactNode } from 'react';
import SideNav from '../components/SideNav/SideNav';

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <div className="wrapper flex flex-col items-stretch h-full">
      <SideNav />
      <main className="flex-grow-1 mw-full overflow-auto h-full">
        {/*<Header />*/}
        <div className="content h-full">{children}</div>
      </main>
    </div>
  );
}
