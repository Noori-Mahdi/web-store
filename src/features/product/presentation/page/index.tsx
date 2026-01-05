import { ProductRepositoryImpl } from '../../data/ProductRepositoryImpl';
import { getProduct } from '../../domain/usecases';
import { ProductList } from '../components/productList';

export const ProductPage = async () => {
  const repo = new ProductRepositoryImpl();
  const res = await getProduct(repo);

  const products = res.data;

  return <ProductList list={products ?? []} />;
};
