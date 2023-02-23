import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const hi = await prisma.hello.create({
    data: {
      hello: "Hi there!",
    },
  });
  console.log(hi);
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
