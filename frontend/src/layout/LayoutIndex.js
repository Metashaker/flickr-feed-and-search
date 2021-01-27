import React from 'react';
import HeaderIndex from '../components/Header/HeaderIndex';

// eslint-disable-next-line object-curly-spacing
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <HeaderIndex />
    {children}
  </>
);

export default Layout;
