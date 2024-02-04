import { Suspense } from "react";
import { notFound } from "next/navigation";
import { MdOutlineEdit } from "react-icons/md";
import prisma from "../../../../prisma/index.mjs";

import Subtask from "@/components/Subtask/Subtask";
import DeleteButton from "./components/DeleteButton";
import CompleteButton from "./components/CompleteButton";


type Props = {
  params: { taskId: number };
};

const TaskPage = async ({ params: { taskId } }: Props) => {
  let data: Task;

  data = await prisma.task.findFirst({
    where: {
      id: taskId.toString(),
    },
  });

  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      {!data?.id && notFound()}

      <div className="flex flex-col relative">
        <div className="flex justify-between">
          <h4 className="text-3xl font-bold">{data?.title}</h4>

          <div className="flex gap-4 items-center">
           <CompleteButton isComplete={data.isComplete} taskId={taskId.toString()}/>

            <button className="hover:-translate-y-2 transition-all grid place-items-center text-2xl rounded-full w-[45px] h-[45px] bg-black text-white cursor-pointer">
              <MdOutlineEdit className="text-3xl" />
            </button>

            <DeleteButton taskId={taskId.toString()} />
          </div>
        </div>

        <p className="text-gray-500 text-lg my-6">{data?.description}</p>

        {/* Subtasks */}

        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-bold">Subtasks:</h4>
          <button className="text-white bg-black font-bold w-[200px] rounded-lg py-2">
            Add new subtask
          </button>
        </div>

        {data?.subtasks.length !== 0 ? (
          <div>
            <ul className="flex flex-col gap-2 max-h-[210px] overflow-y-auto">
              {data?.subtasks.map((s) => (
                <Subtask
                  key={s.id}
                  id={s.id}
                  isComplete={s.isComplete}
                  title={s.title}
                />
              ))}
            </ul>
          </div>
        ) : (
          <h4>You have no subtasks!</h4>
        )}

        {/* Tags */}

        <div className="flex justify-between items-center mt-10 mb-6">
          <h4 className="text-xl font-bold">Tags:</h4>
          <button className="text-white bg-black font-bold w-[200px] rounded-lg py-2">
            Add new tag
          </button>
        </div>

        {data?.tags ? (
          <div>
            <div className="flex gap-4">
              {data?.tags.map((t) => (
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
