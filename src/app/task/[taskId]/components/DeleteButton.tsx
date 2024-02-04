"use client";

import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";
import React from "react";
import { revalidatePath } from "next/cache";

type Props = {
  taskId: string;
};

const DeleteButton = ({ taskId }: Props) => {
  const router = useRouter();

  const deleteTask = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/deleteTask?taskId=${taskId}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Cannot delete data !!!");
      }
      router.replace("/");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={deleteTask}
      className="hover:-translate-y-2 transition-all grid place-items-center text-2xl rounded-full w-[45px] h-[45px] bg-black text-white cursor-pointer"
    >
      <MdDelete className="text-3xl" />
    </button>
  );
};

export default DeleteButton;
