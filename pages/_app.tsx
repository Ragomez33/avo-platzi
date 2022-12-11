import React from 'react';
import { CartProvider } from '../components/Cart/CartProvider';
import { Layout } from '../components/Layout/Layout';

export function reportWebVitals (metric) {
  console.log(metric);
}
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp;