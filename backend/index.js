import express from 'express';
import conectarDB from './config/db.js';
import dotenv from "dotenv"
import usuariosRoutes from './routes/usuarioRoutes.js'

const app = express();
app.use(express.json())

dotenv.config()
conectarDB()

app.use('/api/usuarios', usuariosRoutes)
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Corriendo en puerto ${PORT}`);
})