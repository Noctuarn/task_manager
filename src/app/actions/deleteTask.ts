"use server"

import prisma from "../../../prisma/index.mjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteTask = async (taskId: string) => {
  try {
    await prisma.task.delete({
      where: { id: taskId!.toString() },
    });

    revalidatePath("/");
    redirect("/");

  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
