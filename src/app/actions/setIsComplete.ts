"use server";

import prisma from "../../../prisma/index.mjs";

export const setIsComplete = async (taskId: string, isComplete: boolean) => {
  try {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        isComplete,
      },
    });
  } catch (error) {
    console.error("Error updating task:", error);
  }
};
