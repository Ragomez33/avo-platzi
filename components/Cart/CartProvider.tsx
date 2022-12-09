import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext({});

export const useCart: any = () => {
  return useContext(CartContext);
};

export const CartProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [products, setProducts] = useState<TProductCart[]>([]);

  const onAddProduct = (newProduct: TProduct, quantity: number) => {
    const findProduct = products.find((item) => item.id === newProduct.id);
    const savedProducts = products;
    if (findProduct) {
      const indexOf = products.indexOf(findProduct);
      savedProducts[indexOf] = {
        ...savedProducts[indexOf],
        quantity: quantity + findProduct.quantity
      }
    } else {
      const product = {
        ...newProduct,
        quantity,
      }
      savedProducts.push(product)
    }
    setProducts(savedProducts);
  }
  useEffect(()=>{
    console.log(products);
  }, [products]);
  const value = {
    onAddProduct,
    products,
  }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}