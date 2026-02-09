import type { CreateMaterialUseCase } from "../useCases/CreateMaterialUseCase.js";
import type { Request, Response } from "express";
import type { GetMaterialsUseCase } from "../useCases/GetMaterialsUseCase.js";
import type { UpdateMaterialUseCase } from "../useCases/UpdateMaterialUseCase.js";
import { DeleteMaterialUseCase } from "../useCases/DeleteMaterialUseCase.js";

//Get materials
export class GetMaterialsController {
  constructor(private getMaterialsUseCase: GetMaterialsUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.getMaterialsUseCase.execute();

    return res.json(result);
  };
}

//Create material
export class CreateMaterialController {
  constructor(private createMaterialUseCase: CreateMaterialUseCase) {}

  handle = async (req: Request, res: Response) => {
    await this.createMaterialUseCase.execute(req.body);

    return res.status(201).json({ message: "Material created successfully." });
  };
}

//Update material
export class UpdateMaterialController {
  constructor(private updateMaterialUseCase: UpdateMaterialUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (typeof id !== "string")
      return res.status(400).json({ error: "Missing or invalid ID." });

    await this.updateMaterialUseCase.execute(id, req.body);

    return res.status(200).json({ message: "Material updated successfully." });
  };
}

//Delete material
export class DeleteMaterialController {
  constructor(private deleteMaterialUseCase: DeleteMaterialUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (typeof id !== "string")
      return res.status(400).json({ error: "Missing or invalid ID." });

    await this.deleteMaterialUseCase.execute(id);

    return res.status(200).json({ message: "Material deleted successfully." });
  };
}
