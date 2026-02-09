import { Router } from "express";
import {
  CreateProductController,
  DeleteProductController,
  GetProductsController,
} from "../controllers/ProductController.js";
import { ProductRepository } from "../repositories/ProductRepository.js";
import { GetProductsUseCase } from "../useCases/GetProductsUseCase.js";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase.js";
import { DeleteProductUseCase } from "../useCases/DeleteProductUseCase.js";

const router = Router();

//Repository
const repository = new ProductRepository();

//Get products
const getProductsUseCase = new GetProductsUseCase(repository);
const getProductsController = new GetProductsController(getProductsUseCase);

//Create product
const createProductUseCase = new CreateProductUseCase(repository);
const createProductController = new CreateProductController(
  createProductUseCase,
);

//Delete product
const deleteProductUseCase = new DeleteProductUseCase(repository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase,
);

router.get("/", getProductsController.handle);
router.post("/", createProductController.handle);
router.delete("/", deleteProductController.handle);

export default router;
