import { TProduct } from '../../../domain/entities/type';
import { AddProductBtn } from '../addProductBtn';
import { ProductCard } from '../productCard';
import { TProductCardVM } from '../productForm';

export type TproductListProps = {
  list?: TProduct[];
};

export const ProductList = ({ list }: TproductListProps) => {
  return (
    <>
      <div>
        <AddProductBtn />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list?.map((product) => {
          const cardProduct: TProductCardVM = {
            id: product.id,
            name: product.name,
            catagory: product.catagory,
            description: product.description,
            price: product.price,
            quantity: product.quantity,
            image: product.image[0]?.image ?? '',
          };

          return <ProductCard key={product.id} product={cardProduct} />;
        })}
      </div>
    </>
  );
};
