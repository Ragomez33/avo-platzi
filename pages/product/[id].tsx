import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useCart } from '../../components/Cart/CartProvider';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center'
});
const NumberContainer = styled.div({
  width: '1.5em',
  border: 'solid 1px #ddd',
  paddingLeft: 10,
  paddingRight: 10,
  marginLeft: 10,
  marginRight: 10,
  textAlign: 'center'
});
const FooterContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const AddButton = styled.p({
  background: '#3eac2b',
  padding: 8,
  color: '#fff',
  borderRadius: 8,
  cursor: 'pointer',
  ':hover': {
    background: '#18a100',
  }
})
const ProductItem: React.FC = () => {
  const { onAddProduct } = useCart();
  const [product, setProduct] = useState<TProduct>();
  const [quantity, setQuantity] = useState<number>(0);
  const router = useRouter();
  const { id: productId } = router.query;

  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then((res) => res.json())
        .then(({ data }) => setProduct(data));
    }
  }, [productId]);
  const onClickDown = (): void => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  }
  const onClickUp = (): void => {
    setQuantity(quantity + 1);
  }

  const onClickAddProduct = () => {
    onAddProduct(product, quantity);
  };

  return (
    <div >
      <Container>
        <Image src={product?.image || ''} alt={product?.name || ''} width={300} height={300} />
      </Container>
      <FooterContainer>
        <p style={{
          fontWeight: 500,
          color: '#18a100'
        }}>
          {product?.name}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <AiOutlineArrowDown size={25} color='#18a100' cursor='pointer' onClick={onClickDown} />
          <NumberContainer>
            <p
              style={{
                fontWeight: 500,
                color: '#18a100'
              }}>
              {quantity}
            </p>
          </NumberContainer>
          <AiOutlineArrowUp size={25} color='#18a100' cursor='pointer' onClick={onClickUp} />
        </div>
      </FooterContainer>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}>
        <AddButton onClick={onClickAddProduct}>
          Add to cart
        </AddButton>
      </div>
    </div>
  );
}
export default ProductItem;