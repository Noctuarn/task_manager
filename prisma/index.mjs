import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  await prisma.$connect();

  try {
    const createdTask = await prisma.task.create({
      data: {
        title: "Maybe this time would be better",
        description: "I have nothing to say",
        isComplete: false,
        subtasks: [{ id: "1", isComplete: false, title: "Good luck, bro" }],
        tags: {
          create: [
            { title: "MongoDb", color: "gold" },
            { title: "DataBase", color: "white" },
          ],
        },
      },
      include: {
        tags: true,
      },
    });

    console.log("Data successfully added:", createdTask);
  } catch (error) {
    console.error("Error adding data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// main();

export default prisma;