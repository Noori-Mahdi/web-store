'use client';

import { Edit, Trash } from 'lucide-react';
import { deleteProduct } from '../../serverAction/deleteProduct';
import { updateProduct } from '../../serverAction/updateProduct';
import { TProductCategory } from '../../../domain/entities/type';

type TProductCardProps = {
  product: {
    id: string;
    name: string;
    description?: string | null;
    price?: number | null;
    quantity?: number | null;
    catagory: TProductCategory;
    image: string;
  };
};

export const ProductCard = ({ product }: TProductCardProps) => {
  const handleDelete = async () => {
    try {
      await deleteProduct({ id: product.id });
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async () => {
    try {
      const payload = {
        id: product.id,
        name: product.name,
        catagory: product.catagory,
        description: product.description ?? undefined,
        price: product.price ?? undefined,
        quantity: product.quantity ?? undefined,
      };
      await updateProduct(payload);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="border relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200">
      {/* Actions */}
      <div className="absolute left-2 top-2 z-10 flex gap-2">
        <button
          onClick={handleDelete}
          className="rounded bg-red-500 p-1 text-white hover:bg-red-600"
        >
          <Trash size={16} />
        </button>
        <button
          onClick={handleEdit}
          className="rounded bg-blue-500 p-1 text-white hover:bg-blue-600"
        >
          <Edit size={16} />
        </button>
      </div>

      {/* Image */}
      <div className="h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={product.image ?? '/placeholder.png'}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold">{product.name}</h3>

        {product.description && (
          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex justify-between text-sm mt-2">
          <span className="font-medium">
            💰 {product.price?.toLocaleString() ?? 0} تومان
          </span>
          <span className="text-gray-500">موجودی: {product.quantity ?? 0}</span>
        </div>

        <span className="inline-block text-xs mt-2 rounded bg-gray-100 px-2 py-1">
          {product.catagory}
        </span>
      </div>
    </div>
  );
};
