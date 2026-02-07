-- DropForeignKey
ALTER TABLE "ProductMaterial" DROP CONSTRAINT "ProductMaterial_productId_fkey";

-- AddForeignKey
ALTER TABLE "ProductMaterial" ADD CONSTRAINT "ProductMaterial_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
