-- CreateTable
CREATE TABLE "superheroe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "power" TEXT NOT NULL,
    "marital_status" TEXT NOT NULL,
    "ranking" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "superheroe_pkey" PRIMARY KEY ("id")
);
