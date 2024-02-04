"use client";

import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

import { deleteSubtask } from "@/app/actions/subtasksActions";

type SubtaskProps = Subtask & { taskId: string };

const Subtask = ({ isComplete, title, taskId, id }: SubtaskProps) => {
  const [isSubTaskComplete, setIsSubTaskComplete] = useState(isComplete);

  const completeHandler = () => {
    setIsSubTaskComplete((prev) => !prev);
  };

  const deleteTaskHandler = () => {
    deleteSubtask(taskId, id);
  };

  return (
    <li
      className={`flex w-[99%] justify-between items-center  p-4 rounded-lg hover:text-white hover:bg-black transition-all ${
        isSubTaskComplete ? "line-through" : ""
      }`}
    >
      <span onClick={completeHandler} className="text-xl cursor-pointer">
        {title}
      </span>
      <div className="flex gap-2 items-center">
        <MdOutlineEdit className="text-3xl cursor-pointer" />
        <MdDelete
          onClick={deleteTaskHandler}
          className="text-3xl cursor-pointer"
        />
      </div>
    </li>
  );
};

export default Subtask;
