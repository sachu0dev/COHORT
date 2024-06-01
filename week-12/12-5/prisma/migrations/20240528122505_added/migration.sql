/*
  Warnings:

  - You are about to drop the column `usersId` on the `Todos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Todos" DROP CONSTRAINT "Todos_usersId_fkey";

-- AlterTable
ALTER TABLE "Todos" DROP COLUMN "usersId",
ALTER COLUMN "done" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Todos" ADD CONSTRAINT "Todos_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
