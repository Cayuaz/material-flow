import express from "express";
import cors from "cors";
import productsRoute from "./routes/product.js";
import materialsRoute from "./routes/material.js";
import { globalErrors } from "./middlewares/error.js";

//Config
const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.use("/products", productsRoute);
app.use("/materials", materialsRoute);

//Middlewares
app.use(globalErrors);

export { app };
