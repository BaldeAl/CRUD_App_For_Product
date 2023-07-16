import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api/productAPI';

const ProductForm = ({ product, onProductChange }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [unitPrice, setUnitPrice] = useState(product ? product.unitPrice : 0);
  const [quantity, setQuantity] = useState(product ? product.quantity : 0);
  const [message, setMessage] = useState(''); // Message de réussite

  useEffect(() => { // Met à jour les champs du formulaire si product change
    if (product) {
      setName(product.name);
      setUnitPrice(product.unitPrice);
      setQuantity(product.quantity);
    } else {
      setName('');
      setUnitPrice(0);
      setQuantity(0);
    }
  }, [product]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || quantity < 0 || unitPrice < 0) {
      setMessage('Veuillez remplir tous les champs et utiliser des valeurs positives.');
      return;
    }

    const newProduct = { name, unitPrice, quantity };
    if (product) {
      await updateProduct(product._id, newProduct);
    } else {
      await createProduct(newProduct);
      setName(''); // Réinitialise le champ name
      setUnitPrice(0); // Réinitialise le champ unitPrice
      setQuantity(0); // Réinitialise le champ quantity
      setMessage('Produit créé avec succès!'); // message de réussite
    }

    if (onProductChange) {
      onProductChange();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="font-semibold">
          Nom:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Met à jour le champ name
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="unitPrice" className="font-semibold">
          Prix unitaire :
        </label>
        <input
          type="number"
          id="unitPrice"
          value={unitPrice}
          onChange={(e) => setUnitPrice(parseFloat(e.target.value))} // Met à jour le champ unitPrice
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="quantity" className="font-semibold">
          Quantité :
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))} // Met à jour le champ quantity
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <input
        type="submit"
        value={product ? 'Modifier' : 'Ajouter'}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      />
      {message && <p className="text-dark-500 rounded">{message}</p>}
    </form>
  );
};

export default ProductForm;
