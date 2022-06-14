-- CreateTable
CREATE TABLE "Post" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,
    "body" STRING NOT NULL,
    "image" STRING NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
