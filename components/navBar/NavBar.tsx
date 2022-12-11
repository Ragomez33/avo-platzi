import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { useCart } from '../Cart/CartProvider';
import { TypoBasic } from '../StyledComponents';

const Header = styled.div({
  width: '-webkit-fill-available',
  display: 'flex',
  justifyContent: 'space-between',
  height: '5vh',
  padding: 10,
});

const NavBar: React.FC = () => {
  const { products } = useCart();
  return (
    <Header>
      <Link href='/'>
        <AiOutlineHome size={25} color='#18a100' />
      </Link>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <Link href='/cart'>
          <AiOutlineShoppingCart size={25} color='#18a100' />
        </Link>
        <TypoBasic>
          ({products.length})
        </TypoBasic>
      </div>
    </Header>
  );
}
export default NavBar;