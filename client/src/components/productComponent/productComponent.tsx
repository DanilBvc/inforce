import { FC } from 'react';
import { commentIcon } from '../../assets/global';
import { productComponentProps } from './productComponentType';
import SubmitButton from '../generall/submitButton/submitButton';

const ProductsComponent: FC<productComponentProps> = ({ product }) => {
  const { imageUrl, name, size, comments, count, weight } = product;
  return (
    <div className="product-items">
      <img src={imageUrl} alt={name} />
      <div className="product-item-info">
        <div className="product-item-name">{name}</div>
        <div className="product-item-count">quantity in stock :{count}</div>
        <div className="product-item-size">
          sizes: {size.height}height, {size.width}width
        </div>
        <div className="product-item-weight">product weight {weight}</div>
        <div className="product-item-comments">
          {commentIcon}
          {comments.length}
        </div>
      </div>
      <SubmitButton text={'delete'} />
    </div>
  );
};
export default ProductsComponent;
