-- CreateTable
CREATE TABLE "bands" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "albums" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "band_id" TEXT NOT NULL,
    CONSTRAINT "albums_band_id_fkey" FOREIGN KEY ("band_id") REFERENCES "bands" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
