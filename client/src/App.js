import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import UpdateProduct from './components/UpdateProduct';
import './App.css';

const App = () => {
  const [dataVersion, setDataVersion] = useState(0);

  const handleProductChange = () => {
    setDataVersion(dataVersion + 1);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-2xl my-4">Produits</h1>
                <ProductList
                  onProductChange={handleProductChange}
                  dataVersion={dataVersion}
                />
              </>
            }
          />
          <Route
            path="/create"
            element={
              <>
                <h1 className="text-2xl my-4">Ajouter un produit</h1>
                <ProductForm onProductChange={handleProductChange} />
              </>
            }
          />
          <Route
            path="/update/:id"
            element={<UpdateProduct onProductChange={handleProductChange} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
