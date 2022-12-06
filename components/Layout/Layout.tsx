import React from 'react';
import NavBar from '../navBar/NavBar';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <footer style={{
        marginTop: 50
      }}>
        This is the footer
      </footer>
    </div>
  );
}