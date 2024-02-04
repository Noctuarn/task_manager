import prisma from "../../../../prisma/index.mjs";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest, res: NextRequest) => {
  try {
    const taskId = req.nextUrl.searchParams.get("taskId");
    await prisma.task.delete({
      where: { id: taskId!.toString() },
    });
  } catch (error) {
    console.error("Error deleting task:", error);
  }

  return NextResponse.json(res);
};
