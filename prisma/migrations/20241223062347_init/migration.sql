-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "bookTitle" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "reviewText" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
