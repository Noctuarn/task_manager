import React from "react";
import prisma from "../../../prisma/index.mjs";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

const AddNewTaskPage = async () => {
  const tags = await prisma.tag.findMany();

  const addNewTask = async (formData: FormData) => {
    "use server";

    const title = formData.get("title");
    const description = formData.get("description");
    const tagTitle = formData.get("tagTitle")?.toString();

    if (tagTitle !== undefined) {
      await prisma.task.create({
        data: {
          title: title as string,
          description: description as string,
          subtasks: [],
          tags: {
            connectOrCreate: {
              where: { title: tagTitle },
              create: { title: tagTitle, color: "default-color" }, // Ви можете вказати колір за замовчуванням або власні значення
            },
          },
          isComplete: false,
        },
      });
    }

    revalidatePath("/");
    redirect("/")

  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl mb-10">Add new task</h1>

      <form action={addNewTask} className="flex flex-col w-full gap-6">
        <input
          className="px-2 py-3 text-lg"
          type="text"
          placeholder="Enter new title..."
          name="title"
          required
        />
        <input
          className="px-2 py-3 text-lg"
          type="text"
          placeholder="Enter new description..."
          name="description"
          required
        />
        <select className="px-2 py-3 text-lg" name="tagTitle" id="">
          {tags.map((t) => (
            <option key={t.id} value={t.title}>
              {t.title}
            </option>
          ))}
        </select>

        <button
          className="mt-4 bg-red-600 w-[250px] text-white rounded-sm py-3 self-center text-xl font-semibold"
          type="submit"
        >
          Add new
        </button>
      </form>
    </div>
  );
};

export default AddNewTaskPage;