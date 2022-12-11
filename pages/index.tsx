import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/Cards/ProductCard';

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: 50
});

const Home: React.FC = () => {
  const router = useRouter();
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data }) => setProductList(data));
  }, []);

  const onClickProduct = (productId: string): void => {
    router.push(`/product/${productId}`);
  };
  return (
    <div>
      <h1 style={{
        fontWeight: 500,
        color: '#18a100'
      }}>
        Welcome to Avo Store
      </h1>
      <Container>
        {productList.map((item) => (
          <ProductCard productItem={item} onClick={onClickProduct} />
        ))}
      </Container>
    </div>
  );
}
export default Home;