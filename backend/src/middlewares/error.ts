import type { Request, Response, NextFunction } from "express";
import { Prisma } from "../generated/prisma/client.js";

//Class to create error objects, with message and status code
export class AppError {
  constructor(
    public readonly msg: string,
    public readonly statusCode = 400,
  ) {}
}

//This middleware check the error and send a response to frontend with the error props (msg and statusCode)
export const globalErrors = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const msg = error.message;

  console.log(next);
  console.log(msg);

  //If prisma update and delete not found a record with the specified id, send a response with status code 404
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2025") {
      return res.status(404).json({ error: "Record not found" });
    }
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ error: error.msg });
  }

  //Default message
  //If Error is not a instance of AppError, the response is send to frontend with this message and status code
  return res.status(500).json({
    error: "Server error. Please try again later.",
  });
};
