import { Router } from "express";
import {
  CreateProductController,
  DeleteProductController,
  GetProductsController,
  SuggestedProductsController,
  UpdateProductController,
} from "../controllers/ProductController.js";
import { ProductRepository } from "../repositories/ProductRepository.js";
import { GetProductsUseCase } from "../useCases/GetProductsUseCase.js";
import { CreateProductUseCase } from "../useCases/CreateProductUseCase.js";
import { DeleteProductUseCase } from "../useCases/DeleteProductUseCase.js";
import { UpdateProductUseCase } from "../useCases/UpdateProductUseCase.js";
import { SuggestedProductsUseCase } from "../useCases/SuggestedProductsUseCase.js";
import { MaterialRepository } from "../repositories/MaterialRepository.js";

const router = Router();

//Repository
const repository = new ProductRepository();
const materialRepository = new MaterialRepository();

//Get products
const getProductsUseCase = new GetProductsUseCase(repository);
const getProductsController = new GetProductsController(getProductsUseCase);

//Post product
const createProductUseCase = new CreateProductUseCase(repository);
const createProductController = new CreateProductController(
  createProductUseCase,
);

//Update product
const updateProductUseCase = new UpdateProductUseCase(repository);
const updateProductController = new UpdateProductController(
  updateProductUseCase,
);

//Delete product
const deleteProductUseCase = new DeleteProductUseCase(repository);
const deleteProductController = new DeleteProductController(
  deleteProductUseCase,
);

//Suggested products
const suggestedProductsUseCase = new SuggestedProductsUseCase(
  repository,
  materialRepository,
);
const suggestedProductsController = new SuggestedProductsController(
  suggestedProductsUseCase,
);

router.get("/", getProductsController.handle);
router.post("/", createProductController.handle);
router.patch("/", updateProductController.handle);
router.delete("/", deleteProductController.handle);
router.get("/suggestion", suggestedProductsController.handle);

export default router;
