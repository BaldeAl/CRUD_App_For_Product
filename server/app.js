const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // permet de lire les variables d'environnement dans le fichier .env
const cors = require('cors');
const mongoose = require('mongoose');

const mongodbPassword = process.env.MONGODB_PASSWORD;
const mongodbDatabase = process.env.MONGODB_DATABASE;
const mongodbHost = process.env.MONGODB_HOST;
const mongodbPort = process.env.MONGODB_PORT; 




// connexion à la base de données
mongoose.connect(`mongodb+srv://alseny:${mongodbPassword}@${mongodbHost}/${mongodbDatabase}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

// initialisation l'application Express
const app = express(); 

// utilisation des middlewares
app.use(cors());
app.use(bodyParser.json());

// importation des routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
