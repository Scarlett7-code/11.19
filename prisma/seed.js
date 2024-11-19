import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Projects model feltöltése
  const projects = [];
  for (let i = 1; i <= 10; i++) {
    const project = await prisma.project.create({
      data: {
        name: `Project ${i}`,
        description: `Description for Project ${i}`,
      },
    });
    projects.push(project);
  }

  // ProjectDetails model feltöltése
  for (let i = 0; i < 10; i++) {
    await prisma.projectDetail.create({
      data: {
        projectId: projects[i].id,
        budget: Math.random() * 100000,
        deadline: new Date(new Date().setDate(new Date().getDate() + i * 30)),
        status:
          i % 3 === 0 ? "PLANNING" : i % 3 === 1 ? "IN_PROGRESS" : "COMPLETED",
      },
    });
  }

  // Users model feltöltése
  const users = [];
  for (let i = 1; i <= 10; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User ${i}`,
        email: `user${i}@example.com`,
      },
    });
    users.push(user);
  }

  // Tasks model feltöltése
  for (let i = 0; i < 10; i++) {
    const projectId = projects[i % projects.length].id;
    await prisma.task.create({
      data: {
        projectId,
        title: `Task ${i + 1} for Project ${projectId}`,
        completed: i % 2 === 0,
      },
    });
  }

  // ProjectUser kapcsolatok feltöltése
  for (let i = 0; i < 10; i++) {
    const projectId = projects[i % projects.length].id;
    const userId = users[i % users.length].id;
    await prisma.projectUser.create({
      data: {
        projectId,
        userId,
      },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });