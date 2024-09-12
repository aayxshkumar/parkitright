import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-auto bg-zinc-300 flex min-h-screen max-w-screen-xxl flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
