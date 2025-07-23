/*
  Warnings:

  - You are about to drop the column `metGoal` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `passed` on the `Grade` table. All the data in the column will be lost.
  - You are about to drop the column `gradingSystem` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Subject` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "metGoal",
DROP COLUMN "passed";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "gradingSystem";

-- DropEnum
DROP TYPE "GradingSystem";

-- CreateIndex
CREATE UNIQUE INDEX "Subject_name_key" ON "Subject"("name");
