-- CreateEnum
CREATE TYPE "author" AS ENUM ('Yog_Sharma');

-- CreateEnum
CREATE TYPE "years" AS ENUM ('y2021', 'y2020', 'y2018', 'y2022', 'y2016', 'y2011', 'y2000', 'y2023', 'y2024', 'y2025', 'y2026', 'y2027', 'y2028', 'y2029', 'y2030');

-- CreateTable
CREATE TABLE "Post" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,
    "body" STRING NOT NULL,
    "image" STRING NOT NULL,
    "tags" STRING NOT NULL,
    "author" "author" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AboutDetail" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,

    CONSTRAINT "AboutDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeDetail" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,

    CONSTRAINT "HomeDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "email" STRING NOT NULL,
    "message" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "name" STRING,
    "email" STRING NOT NULL,
    "hashedPassword" STRING NOT NULL,
    "salt" STRING NOT NULL,
    "resetToken" STRING,
    "resetTokenExpiresAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Timeline" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,
    "year" "years" NOT NULL,

    CONSTRAINT "Timeline_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Timeline_id_key" ON "Timeline"("id");
