import React from 'react';
import NavBar from '../navBar/NavBar';
import styled from '@emotion/styled';

const MainContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'Roboto Slab, serif',
  color: '#000',
  background: '#ddd',
  height: '100vh',
  paddingTop: 20,
  paddingBottom: 20,
})
const ContainerLayout = styled.div({
  background: '#fff',
  width: '50%',
  borderRadius: '16px',
  padding: 10,
  height: '100%'
});
type LayoutProps = {
  children: JSX.Element;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <ContainerLayout>
        <NavBar />
        {children}
      </ContainerLayout>
    </MainContainer>
  );
}