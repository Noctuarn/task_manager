import TaskCard from "@/components/TaskCard/TaskCard";
import AddNewCard from "@/components/AddNewCard/AddNewCard";

const Home = async () => {
  let data: Task[] = [];

  try {
    const response = await fetch("http://localhost:5000/tasks", {cache: "no-cache"});
    data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error);
  }

  return (
    <main className="flex flex-col">
      <h1 className="text-2xl font-bold">All tasks</h1>

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
        <AddNewCard/>
      </div>
    </main>
  );
};

export default Home;
