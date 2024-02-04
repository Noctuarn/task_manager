"use client";

import { addNewSubtask } from "@/app/actions/subtasksActions";
import { useRef } from "react";

type Props = {
  taskId: string;
  subTaskId: string;
};

const AddNewSubtask = ({ taskId, subTaskId }: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const addNewSubTaskHandler = async (formData: FormData) => {
    const subtask = formData.get("subtask")?.toString();
    if (!subtask) return;

    await addNewSubtask(subtask, taskId, subTaskId);

    formRef.current?.reset();
  };

  return (
    <form ref={formRef} action={addNewSubTaskHandler} className="flex gap-2">
      <input
        name="subtask"
        placeholder="Enter new subtask..."
        required
        type="text"
        className="p-3 rounded-lg w-[80%] bg-transparent border-2 border-black"
      />
      <button
        className="p-3 w-[20%] bg-black text-white rounded-lg font-bold text-lg"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddNewSubtask;
