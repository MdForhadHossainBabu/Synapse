import express from "express";
import { signup } from "../controlers/AuthControlers.js";

const authRoutes = express.Router();

authRoutes.post('/signup', signup);

export default authRoutes;
