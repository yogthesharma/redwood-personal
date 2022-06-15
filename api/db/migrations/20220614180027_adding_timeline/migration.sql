-- CreateEnum
CREATE TYPE "years" AS ENUM ('y2021', 'y2020', 'y2018', 'y2022', 'y2016', 'y2011', 'y2000', 'y2023', 'y2024', 'y2025', 'y2026', 'y2027', 'y2028', 'y2029', 'y2030');

-- CreateTable
CREATE TABLE "Timeline" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,
    "year" "years" NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Timeline_id_key" ON "Timeline"("id");
