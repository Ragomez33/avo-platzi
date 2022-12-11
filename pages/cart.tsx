import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useCart } from '../components/Cart/CartProvider';
import Image from 'next/image';
import { TypoBasic, TypoBasic2 } from '../components/StyledComponents';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingLeft: 30,
  paddingRight: 30,
  position: 'relative',
  minHeight: '30vh'
});
const ProductRow = styled.div({
  display: 'flex',
  alignItems: 'center',
});


const Cart: React.FC = () => {
  const { products } = useCart();
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    if (products) {
      const totalPerProduct = products.map((item) => item.price * item.quantity);
      const tt = totalPerProduct.reduce((a, b) => a + b, 0);
      setTotal(tt);
    }
  }, [products]);

  return (
    <>
      <h1 style={{
        fontWeight: 500,
        color: '#18a100'
      }}>
        Cart
      </h1>
      <Container>
        {
          products && (
            products.map((item) => (
              <ProductRow>
                <div style={{
                  flexBasis: 'min-content',
                  marginRight: 20
                }}>
                  <Image src={item.image} alt={item.name} width={50} height={50} />
                </div>
                <TypoBasic>
                  {item.name}
                </TypoBasic>
                <TypoBasic>
                  {item.quantity}
                </TypoBasic>
                <TypoBasic>
                  {item.price.toFixed(2)}$
                </TypoBasic>
                <div style={{
                  display: 'flex',
                  justifySelf: 'flex-end'
                }}>
                  <TypoBasic>
                    {(item.price * item.quantity).toFixed(2)}$
                  </TypoBasic>
                </div>
              </ProductRow>
            ))
          )
        }
        <div style={{
          position: 'absolute',
          bottom: '-8em',
          right: 0,
          display: 'flex',
          justifySelf: 'flex-end'
        }}>
          <TypoBasic2>
            Total:
          </TypoBasic2>
          <TypoBasic2>
            {total.toFixed(2)}$
          </TypoBasic2>
        </div>
      </Container>
    </>
  );
}
export default Cart;