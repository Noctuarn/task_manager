"use client";

import { MdDelete } from "react-icons/md";
import { deleteTask } from "@/app/actions/deleteTask";

type Props = {
  taskId: string;
};

const DeleteButton = ({ taskId }: Props) => {
  return (
    <button
      onClick={() => {
        deleteTask(taskId);
      }}
      className="hover:-translate-y-2 transition-all grid place-items-center text-2xl rounded-full w-[45px] h-[45px] bg-black text-white cursor-pointer"
    >
      <MdDelete className="text-3xl" />
    </button>
  );
};

export default DeleteButton;
