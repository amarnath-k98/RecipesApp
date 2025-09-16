import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import recipeRouter from './src/routes/recipeRoutes.js';

dotenv.config();
connectDB();


const app = express();
app.use(express.json());



app.use('/api/recipes', recipeRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { 
    console.log(`Server running on port ${PORT}`);
});