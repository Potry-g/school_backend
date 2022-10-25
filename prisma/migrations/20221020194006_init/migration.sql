-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Professor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "schoolId" INTEGER NOT NULL,
    "empathy" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "knowledge" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "strictness" INTEGER NOT NULL,
    "createdAt" TEXT,
    CONSTRAINT "Professor_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Professor" ("createdAt", "empathy", "gender", "id", "knowledge", "name", "rating", "schoolId", "strictness", "surname") SELECT "createdAt", "empathy", "gender", "id", "knowledge", "name", "rating", "schoolId", "strictness", "surname" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
