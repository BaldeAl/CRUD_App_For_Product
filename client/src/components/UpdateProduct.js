import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import { getProductById } from '../api/productAPI';

const UpdateProduct = ({ onProductChange }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    

    useEffect(() => {
        const fetchProduct = async () => {
            const fetchedProduct = await getProductById(id);
            setProduct(fetchedProduct);
        };

        fetchProduct();
    }, [id]);

    return product ? (
        <>
            <h1>Mettre à jour le produit</h1>
            <ProductForm product={product} onProductChange={onProductChange} />
        </>
    ) : (
        <p>Loading...</p>
    );
};

export default UpdateProduct;

