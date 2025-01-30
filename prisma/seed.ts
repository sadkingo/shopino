import { prisma } from "@/prisma/client";
import { users } from "@/prisma/seedData/usersData";

async function main() {
  // seed users data
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
  // seed
}

main().then(() => {
  console.log("Users created successfully");
  process.exit(0);
}).catch(err => {
  console.error("Error creating users", err.message);
  process.exit(1);
})