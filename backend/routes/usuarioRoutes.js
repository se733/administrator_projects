import express  from "express";
const router = express.Router();

import { autenticar, registrar } from "../controllers/usuariosController.js";

router.post('/', registrar)
router.post('/login', autenticar)


export default router;