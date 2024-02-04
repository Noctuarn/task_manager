import { Suspense } from "react";
import { notFound } from "next/navigation";
import { MdOutlineEdit } from "react-icons/md";

import Subtask from "@/components/Subtask/Subtask";
import DeleteButton from "./components/DeleteButton";
import CompleteButton from "./components/CompleteButton";

import AddNewSubtask from "@/components/AddNewSubtask/AddNewSubtask";

import prisma from "../../../../prisma/index.mjs";

type Props = {
  params: { taskId: number };
};

const TaskPage = async ({ params: { taskId } }: Props) => {
  let data: Task | null;

  try {
    data = await prisma.task.findFirst({
      where: {
        id: taskId.toString(),
      },
    });
  } catch (error) {
    console.error("Error fetching task data:", error);
    data = null;
  }

  if (!data) {
    return <Suspense fallback={<h4>Loading...</h4>}>{notFound()}</Suspense>;
  }

  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      <div className="flex flex-col relative">
        <div className="flex justify-between">
          <h4 className="text-3xl font-bold">{data.title}</h4>

          <div className="flex gap-4 items-center">
            <CompleteButton
              isComplete={data.isComplete}
              taskId={taskId.toString()}
            />

            <button className="hover:-translate-y-2 transition-all grid place-items-center text-2xl rounded-full w-[45px] h-[45px] bg-black text-white cursor-pointer">
              <MdOutlineEdit className="text-3xl" />
            </button>

            <DeleteButton taskId={taskId.toString()} />
          </div>
        </div>

        <p className="text-gray-500 text-lg my-6">{data.description}</p>

        {/* Subtasks */}
        <h4 className="text-xl font-bold mb-6">Subtasks:</h4>

        {data.subtasks && data.subtasks.length !== 0 ? (
          <ul className="flex flex-col gap-2 max-h-[210px] overflow-y-auto mb-5">
            {data.subtasks.map((s) => (
              <Subtask
                taskId={taskId.toString()}
                key={s.id}
                id={s.id}
                isComplete={s.isComplete}
                title={s.title}
              />
            ))}
          </ul>
        ) : (
          <h4 className="mb-5">You have no subtasks!</h4>
        )}
        <AddNewSubtask
          taskId={taskId.toString()}
          subTaskId={(data.subtasks.length + 1).toString()}
        />

        {/* Tags */}
        <div className="flex justify-between items-center mt-10 mb-6">
          <h4 className="text-xl font-bold">Tags:</h4>
          <button className="text-white bg-black font-bold w-[200px] rounded-lg py-2">
            Add new tag
          </button>
        </div>

        {data.tags ? (
          <div>
            <div className="flex gap-4">
              {data.tags.map((t) => (
                <span
                  className="rounded-xl py-2 px-4 text-white font-bold"
                  style={{ backgroundColor: t.color }}
                  key={t.id + "tags btn"}
                >
                  {t.value}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <h4>You have no tags!</h4>
        )}
      </div>
    </Suspense>
  );
};

export default TaskPage;
