import type { Decimal } from "@prisma/client/runtime/client";

type MaterialWithQuantity = {
  id?: string;
  name?: string;
  stock?: number;
  quantity: number;
};

export class Product {
  constructor(
    public name: string,
    public price: Decimal,
    public materials?: MaterialWithQuantity[],
    public id?: string,
  ) {}
}
