import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductItem: React.FC = () => {
  const [product, setProduct] = useState<TProduct>();
  const router = useRouter();
  const { id: productId } = router.query;

  useEffect(() => {
    if (productId) {
      fetch(`/api/avo/${productId}`)
        .then((res) => res.json())
        .then(({ data }) => setProduct(data));
    }
  }, [productId]);
  
  return (
    <div>
      <h1>
        Este es el producto: {product?.name}
      </h1>
    </div>
  );
}
export default ProductItem;