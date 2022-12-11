import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { ProductCard } from '../components/Cards/ProductCard';

const Container = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: 50
});

export const getStaticProps = async (params) => {
  const response = await fetch('https://avo-platzi-iil5pvkmb-rgkoko.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json();
  return {
    props: {
      productList
    }
  }
};
const Home: React.FC<{ productList: TProduct[] }> = ({ productList }) => {
  const router = useRouter();

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
          <ProductCard productItem={item} onClick={onClickProduct} key={item.sku} />
        ))}
      </Container>
    </div>
  );
}
export default Home;