import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import getDbConnection from './config/index.js';  // Import the default function
import setupController from './controllers/setupController.js';
import apiController from './controllers/apiController.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Recreate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to access static files and handle templating
app.use('/assets', express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

mongoose.connect(getDbConnection());  // Call the function here
setupController(app);
apiController(app);

app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});
