import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
