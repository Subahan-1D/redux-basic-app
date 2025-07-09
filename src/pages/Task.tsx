import AddTask from "@/components/modules/task/addTask";
import TaskCard from "@/components/modules/task/taskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  console.log(filter);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20 border-">
      <div className="flex justify-between items-center">
        <h1>Task</h1>
        <AddTask></AddTask>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
