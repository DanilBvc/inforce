import { useEffect } from 'react';
import { unauthorizedRequest } from '../../utils/queries';
import { products } from '../../utils/network';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import ProductsComponent from '../productComponent/productComponent';
import setProducts from '../../store/actions/setProducts';
import './products.scss';
const Products = () => {
  const dispatch = useAppDispatch();
  const productsData = useAppSelector((state) => state.productsReducer);
  useEffect(() => {
    unauthorizedRequest(products, 'GET')
      .then((data) => {
        dispatch(setProducts(data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="products-wrapper">
      {productsData.map((product) => (
        <ProductsComponent key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Products;
