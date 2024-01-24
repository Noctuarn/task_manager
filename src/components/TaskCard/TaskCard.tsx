import React from "react";

const TaskCard = ({ title, description, isComplete, tags }: Task) => {
  return (
    <div className="flex flex-col justify-between bg-white shadow-lg shadow-gray-500 p-4 w-[360px] h-[300px] rounded-3xl">
      <div>
        <div className="flex justify-between mb-5 gap-4">
          <h4 className="font-bold text-lg cursor-pointer">{title}</h4>
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

      <div className="flex flex-wrap gap-3 rounded-2xl">
        {tags.map((t) => (
          <span
            key={t._id + "tag"}
            className={`bg-[${t.color}] text-sm text-white font-bold rounded-xl px-2 py-1`}
          >
            {t.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
