-- CreateTable
CREATE TABLE "AboutDetail" (
    "id" INT4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
    "title" STRING NOT NULL,
    "subtitle" STRING NOT NULL,

    CONSTRAINT "AboutDetail_pkey" PRIMARY KEY ("id")
);