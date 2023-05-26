export const baseUrl = 'http://localhost:4444';

export const uploadImg = baseUrl + '/upload';
export const products = baseUrl + '/products';
export const productById = (id: string) => baseUrl + `/product/${id}`;
