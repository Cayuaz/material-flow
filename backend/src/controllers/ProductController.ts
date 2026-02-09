import type { CreateProductUseCase } from "../useCases/CreateProductUseCase.js";
import type { DeleteProductUseCase } from "../useCases/DeleteProductUseCase.js";
import type { GetProductsUseCase } from "../useCases/GetProductsUseCase.js";
import type { Response, Request } from "express";
import type { UpdateProductUseCase } from "../useCases/UpdateProductUseCase.js";
import type { SuggestedProductsUseCase } from "../useCases/SuggestedProductsUseCase.js";

//Get products
export class GetProductsController {
  constructor(private getProductsUseCase: GetProductsUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.getProductsUseCase.execute();

    return res.json(result);
  };
}

//Create product
export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    await this.createProductUseCase.execute(req.body);

    res.status(201).json({ message: "Product created successfully." });
  };
}

//Update product
export class UpdateProductController {
  constructor(private updateProductUseCase: UpdateProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (typeof id !== "string")
      return res.status(400).json({ error: "Missing or invalid ID." });

    await this.updateProductUseCase.execute(id, req.body);

    return res.status(200).json({ message: "Product updated successfully." });
  };
}

//Delete product
export class DeleteProductController {
  constructor(private deleteProductUsecase: DeleteProductUseCase) {}

  handle = async (req: Request, res: Response) => {
    const id = req.params.id;

    if (typeof id !== "string")
      return res.status(400).json({ error: "Missing or invalid ID." });

    await this.deleteProductUsecase.execute(id);

    return res.status(200).json({ message: "Product deleted successfully." });
  };
}

//Suggested products
export class SuggestedProductsController {
  constructor(private suggestedProductsUseCase: SuggestedProductsUseCase) {}

  handle = async (req: Request, res: Response) => {
    const result = await this.suggestedProductsUseCase.execute();

    res.json(result);
  };
}
