import React, { ReactNode, useState } from 'react';
import SideNav from '../components/SideNav/SideNav';
import Loading from '../components/Loading/Loading';

interface Props {
  children: ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="wrapper flex flex-col items-stretch h-full">
      {isLoading && <Loading />}
      <SideNav />
      <main className="flex-grow-1 mw-full overflow-auto h-full">
        {/*<Header />*/}
        <div className="content h-full">{children}</div>
      </main>
    </div>
  );
}
