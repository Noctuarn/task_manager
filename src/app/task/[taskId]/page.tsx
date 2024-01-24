import { Suspense } from "react";
import Subtask from "@/components/Subtask/Subtask";
import { notFound } from "next/navigation";
import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

type Props = {
  params: { taskId: number };
};

const TaskPage = async ({ params: { taskId } }: Props) => {
  let data: Task | undefined = undefined;

  try {
    data = await fetch(`http://localhost:5000/tasks/${taskId}`, {
      next: { revalidate: 60 },
    }).then((data) => data.json());
  } catch (err) {
    console.error(err);
  }

  return (
    <Suspense fallback={<h4>Loading...</h4>}>
      {!data?.id && notFound()}

      <div className="flex flex-col relative">
        <div className="flex justify-between">
          <h4 className="text-3xl font-bold">{data?.title}</h4>

          <div className="flex gap-4 items-center">
            <button className="bg-red-600 text-white font-bold p-3 rounded-xl">
              Incompleted
            </button>

            <button className="hover:-translate-y-2 transition-all grid place-items-center text-2xl rounded-full w-[45px] h-[45px] bg-black text-white cursor-pointer">
              <MdOutlineEdit className="text-3xl" />
            </button>

            <button className="hover:-translate-y-2 transition-all grid place-items-center text-2xl rounded-full w-[45px] h-[45px] bg-black text-white cursor-pointer">
              <MdDelete className="text-3xl" />
            </button>
          </div>
        </div>

        <p className="text-gray-500 text-lg my-6">{data?.description}</p>

        {/* Subtasks */}
        {data?.subtasks.length !== 0 ? (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-bold">Subtasks:</h4>
              <button className="text-white bg-black font-bold w-[200px] rounded-lg py-2">
                Add new subtask
              </button>
            </div>

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
        {data?.tags.length !== 0 ? (
          <div>

            <div className="flex justify-between items-center mt-10 mb-6">
              <h4 className="text-xl font-bold">Tags:</h4>
              <button className="text-white bg-black font-bold w-[200px] rounded-lg py-2">
                Add new tag
              </button>
            </div>

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
