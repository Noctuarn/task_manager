"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { setIsComplete } from "@/app/actions/setIsComplete";

type Props = {
  isComplete: boolean;
  taskId: string;
};

const CompleteButton = ({ taskId, isComplete }: Props) => {
  const router = useRouter();

  const setIsCompleteHandler = () => {
    setIsComplete(taskId, !isComplete);

    router.refresh();
  };

  return (
    <button
      onClick={setIsCompleteHandler}
      className={`${
        isComplete ? "bg-green-900" : "bg-red-600"
      } text-white font-bold p-3 rounded-xl`}
    >
      {isComplete ? "Complete" : "Incomplete"}
    </button>
  );
};

export default CompleteButton;
