-- CreateTable
CREATE TABLE "School" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "createdAt" TEXT
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "empathy" INTEGER NOT NULL,
    "gender" INTEGER NOT NULL,
    "knowledge" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "strictness" INTEGER NOT NULL,
    "createdAt" TEXT,
    CONSTRAINT "Professor_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
