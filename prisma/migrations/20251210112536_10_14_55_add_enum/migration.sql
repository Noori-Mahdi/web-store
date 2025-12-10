/*
  Warnings:

  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('MOBILE', 'LAPTOP', 'WATCH', 'OTHER');

-- DropTable
DROP TABLE "product";

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "catagory" "ProductCategory" NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION DEFAULT 0.0,
    "quantity" INTEGER DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
