import React from 'react';
import { useRouter } from 'next/router';

const ProductItem: React.FC = () => {
    const router = useRouter();
    const {id: productId}= router.query;
    return(
        <div>
            <h1>
                Este es el producto: {productId}
            </h1>
        </div>
    );
}
export default ProductItem;