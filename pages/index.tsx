import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/Cards/ProductCard';
import NavBar from '../components/navBar/NavBar';

const Container = styled.div({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'space-between',
});

const Home: React.FC = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(() => {
        fetch('/api/avo')
            .then((res) => res.json())
            .then(({ data }) => setProductList(data));
    }, []);
    return (
        <div>
            <Container>
                {productList.map((item) => (
                    <ProductCard productItem={item} />
                ))}
            </Container>
        </div>
    );
}
export default Home;