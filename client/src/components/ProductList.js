import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { getProducts } from '../api/productAPI';

const ProductList = ({ onProductChange, dataVersion }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(''); // Pour gérer le texte de recherche

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [dataVersion]); // Mise à jour de la liste chaque fois que dataVersion change

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) // Filtrer les produits par nom
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher par nom"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
            onProductChange={onProductChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
