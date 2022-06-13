-- CreateTable
CREATE TABLE "Post" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,
    "body" STRING NOT NULL,
    "image" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
