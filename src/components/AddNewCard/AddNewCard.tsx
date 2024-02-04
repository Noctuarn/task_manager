import Link from "next/link";
import React from "react";

const AddNewCard = () => {
  return (
    <Link href={"/add-new-task"} className="flex flex-col justify-center bg-transparent border-4 border-dashed border-gray-500  p-4 w-[360px] h-[300px] rounded-3xl">
      <button className="text-3xl font-bold cursor-pointer text-gray-500">
        + Add new task
      </button>
    </Link>
  );
};

export default AddNewCard;
