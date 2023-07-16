import React from 'react';
import { deleteProduct } from '../api/productAPI';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, onProductChange }) => {
  const handleDelete = async () => {
    await deleteProduct(product._id);
    if (onProductChange) {
      onProductChange();
    }
  };

  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">{product.unitPrice} €</p>
      <p className="text-gray-600 mb-4">{product.quantity}</p>
      <Link to={`/update/${product._id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
          Modifier
        </button>
      </Link>
      <button
        onClick={handleDelete} // Appelle la fonction handleDelete
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Supprimer
      </button>
    </div>
  );
};

export default ProductItem;
