export type productModel = {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: ['CommentModel', 'CommentModel'];
};
export type commentModel = {
  id: number;
  productId: number;
  description: string;
  date: string;
};
