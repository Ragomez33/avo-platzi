import styled from '@emotion/styled';
import Image from 'next/image';
import React from 'react';

const Card = styled.div({
    minWidth: '45%',
    background: '#fff',
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'solid 1px #ddd',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    margin: '10px 10px',
    boxShadow: '0px 10px 16px -7px rgba(0,0,0,0.75)',
    '-webkit-box-shadow': '0px 10px 16px -7px rgba(0,0,0,0.75)',
    '-moz-box-shadow': '0px 10px 16px -7px rgba(0,0,0,0.75)',
    position: 'relative',
})
const ImageContainer = styled.div({
    width: '100%',
    position: 'relative',
    height: '100%',
});
type ProductCardProps = {
    productItem: TProduct;
}
export const ProductCard: React.FC<ProductCardProps> = ({ productItem }) => {
    return (
        <Card>
            <p style={{
                fontWeight: 500,
                color: '#18a100'
            }}>
                {productItem.name}
            </p>
            <ImageContainer>
                <Image src={productItem.image} alt={productItem.id} width={330} height={300} />
            </ImageContainer>
            <p style={{
                fontWeight: 500,
                color: 'gray'
            }}>
                {productItem.price} $
            </p>
        </Card>
    )
}