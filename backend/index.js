import express from 'express';
import conectarDB from './config/db.js';
// import dotenv from "dotenv"

const app = express();
conectarDB()
// dotenv.config()
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
})