import express from "express";
import cors from "cors";
import productsRoute from "./routes/product.js";
import { globalErrors } from "./middlewares/error.js";

//Config
const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.use("/products", productsRoute);

//Middlewares
app.use(globalErrors);

export { app };
