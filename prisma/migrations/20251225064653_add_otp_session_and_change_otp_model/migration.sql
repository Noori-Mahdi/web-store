/*
  Warnings:

  - Added the required column `expiresAt` to the `Otp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Otp" ADD COLUMN     "attempts" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "used" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "OtpSession" (
    "id" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OtpSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "OtpSession_apiKey_key" ON "OtpSession"("apiKey");

-- CreateIndex
CREATE INDEX "OtpSession_mobile_idx" ON "OtpSession"("mobile");

-- CreateIndex
CREATE INDEX "Otp_mobile_idx" ON "Otp"("mobile");

-- CreateIndex
CREATE INDEX "User_mobile_idx" ON "User"("mobile");
