import { Suspense } from "react";
import Subtask from "@/components/Subtask/Subtask";
import { notFound } from "next/navigation";

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
      
      {!data?.id  && notFound()}
      
      <div className="flex flex-col">
        <h4 className="text-3xl font-bold">{data?.title}</h4>
        <p className="text-gray-500 text-lg my-6">{data?.description}</p>
        {data?.subtasks.length !== 0 ? (
          
          <div>

            <h4 className="text-xl font-bold mb-6">Subtasks:</h4>

            <ul className="flex flex-col gap-6">
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
        <button className="text-white bg-black font-bold w-[200px] rounded-lg py-2 mt-5">Add new subtask</button>
      </div>
    </Suspense>
  );
};

export default TaskPage;
