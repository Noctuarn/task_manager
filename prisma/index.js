import { PrismaClient } from '@prisma/client/edge.js';

const prisma = new PrismaClient();

const main = async () => {
  try {
    await prisma.task.create({
      data: {
        title: "Add first data into my MongoDB",
        description: "I should learn how to add data into my Database, especially with m-n relations",
        isComplete: false,
        subtasks: [
          { title: "Read about m-n in official Prisma documentation", isComplete: false, id: `subtask-1` },
          { title: "Ask AI about adding data into MongoDB", isComplete: false, id: `subtask-2` }
        ],
        tags: {
          create: [
            { title: "MongoDB", color: "green" },
            { title: "Database", color: "light-blue" }
          ]
        }
      }
    });
    console.log("Data successfully added!");
  } catch (error) {
    console.error("Error adding data:", error);
  } finally {
    await prisma.$disconnect(); // Закрийте підключення до бази даних
  }
};

main();