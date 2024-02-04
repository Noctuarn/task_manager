import TaskCard from '@/components/TaskCard/TaskCard'
import React from 'react'
import prisma from '../../../../prisma/index.mjs'

const CompletedPage = async () => {
  
  let data: Task[] = [];
  data = await prisma.task.findMany({
    where: {isComplete: true}
  });
  
  return (
    <main className="flex flex-col">
      <h1 className="text-2xl font-bold">Completed tasks</h1>

      <div className="flex flex-wrap gap-y-6 gap-x-4 mt-10">
        {data.map((el) => (
          <TaskCard
            id={el.id}
            description={el.description}
            isComplete={el.isComplete}
            subtasks={el.subtasks}
            tags={el.tags}
            title={el.title}
            key={el.id + "taskcard"}
          />
        ))}
      </div>
    </main>
  )
}

export default CompletedPage