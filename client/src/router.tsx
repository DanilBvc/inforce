import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/products/products';
import Product from './pages/product/product';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default Router;
