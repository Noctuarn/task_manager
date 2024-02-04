"use server";

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/index.mjs";


export const addNewSubtask = async (
  value: string,
  taskId: string,
  subtaskId: string
) => {
  try {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        subtasks: {
          push: {
            id: subtaskId,
            title: value,
            isComplete: false,
          },
        },
      },
    });

    revalidatePath(`task/${taskId}`);
  } catch (error) {
    console.error("Error adding subtask to task:", error);
    throw error;
  }
};

export const deleteSubtask = async (taskId: string, subtaskId: string) => {
  try {
    await prisma.task.update({
      where: { id: taskId },
      data: {
        subtasks: {
          deleteMany: {
            where: { id: subtaskId },
          },
        },
      },
    });

    revalidatePath(`task/${taskId}`);
  } catch (error) {
    console.error("Error adding subtask to task:", error);
    throw error;
  }
};
