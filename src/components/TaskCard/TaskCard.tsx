import React from "react";
import Link from "next/link";

const TaskCard = ({ id, title, description, isComplete, tags }: Task) => {
  return (
    <div className="flex flex-col justify-between bg-white shadow-lg shadow-gray-500 p-4 w-[360px] h-[300px] rounded-3xl">
      <div>
        <div className="flex justify-between mb-5 gap-4">
          <Link
            href={`task/${id}`}
            className="font-bold text-lg cursor-pointer"
          >
            {title}
          </Link>
          <span
            className={`rounded-2xl text-sm px-2 h-fit py-1 text-white font-bold ${
              isComplete ? "bg-green-500" : "bg-red-600"
            }`}
          >
            {isComplete ? "Complete" : "Incomplete"}
          </span>
        </div>
        <p className="mb-5 overflow-y-auto">{description}</p>
      </div>

      {tags ? (
        <div className="flex flex-wrap gap-3 rounded-2xl">
          {tags.map((t) => (
            <span
              style={{ backgroundColor: t.color }}
              key={t.id + "tag"}
              className={`text-sm text-white font-bold rounded-xl px-2 py-1`}
            >
              {t.value}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TaskCard;
