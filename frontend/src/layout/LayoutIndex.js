import React, { useContext, useEffect } from 'react';
import HeaderIndex from '../components/Header/HeaderIndex';
import { AppContext } from '../context/Context';

// eslint-disable-next-line object-curly-spacing
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { getInitialFeed } = useContext(AppContext);

  useEffect(() => {
    getInitialFeed();
  }, []);

  return (
    <>
      <HeaderIndex />
      {children}
    </>
  );
};

export default Layout;
