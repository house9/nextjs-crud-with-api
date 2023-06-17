import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.band.create({
    data: {
      name: "Metallica",
    },
  });
  await prisma.band.create({
    data: {
      name: "AC/DC",
    },
  });
  await prisma.band.create({
    data: {
      name: "Iron Maiden",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
