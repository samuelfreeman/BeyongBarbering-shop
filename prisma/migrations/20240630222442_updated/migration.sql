-- DropForeignKey
ALTER TABLE "haircut" DROP CONSTRAINT "haircut_userId_fkey";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "clerkUserId" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "telephone" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "haircut" ADD CONSTRAINT "haircut_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
