import express  from "express";
const router = express.Router();

import { registrar } from "../controllers/usuariosController.js";

router.post('/', registrar)

export default router;