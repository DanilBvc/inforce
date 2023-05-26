import { useEffect } from 'react';
import { unauthorizedRequest } from '../../utils/queries';
import { products } from '../../utils/network';

const Products = () => {
  useEffect(() => {
    unauthorizedRequest(products, 'GET')
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
};
export default Products;
