import { Router } from "express";
import { MaterialRepository } from "../repositories/MaterialRepository.js";
import { CreateMaterialUseCase } from "../useCases/CreateMaterialUseCase.js";
import {
  CreateMaterialController,
  DeleteMaterialController,
  GetMaterialsController,
  UpdateMaterialController,
} from "../controllers/MaterialController.js";
import { GetMaterialsUseCase } from "../useCases/GetMaterialsUseCase.js";
import { UpdateMaterialUseCase } from "../useCases/UpdateMaterialUseCase.js";
import { DeleteMaterialUseCase } from "../useCases/DeleteMaterialUseCase.js";

const router = Router();

//Repository
const repository = new MaterialRepository();

//Get materials
const getMaterialsUseCase = new GetMaterialsUseCase(repository);
const getMaterialsController = new GetMaterialsController(getMaterialsUseCase);

//Post material
const createMaterialUseCase = new CreateMaterialUseCase(repository);
const createMaterialController = new CreateMaterialController(
  createMaterialUseCase,
);

//Update material
const updateMaterialUseCase = new UpdateMaterialUseCase(repository);
const updateMaterialController = new UpdateMaterialController(
  updateMaterialUseCase,
);

//Delete material
const deleteMaterialUseCase = new DeleteMaterialUseCase(repository);
const deleteMaterialController = new DeleteMaterialController(
  deleteMaterialUseCase,
);

router.get("/", getMaterialsController.handle);
router.post("/", createMaterialController.handle);
router.patch("/:id", updateMaterialController.handle);
router.delete("/:id", deleteMaterialController.handle);

export default router;
