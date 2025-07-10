import AddTaskModel from "@/components/modules/task/addTaskModel";
import TaskCard from "@/components/modules/task/taskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  selectFilter,
  selectTasks,
  updateFilter,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  console.log(filter);
  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20 border-">
      <div className="flex justify-end gap-3.5 items-center">
        <h1 className="mr-auto">Task</h1>
        <Tabs defaultValue="all">
          <TabsList className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full">
            <TabsTrigger
              onClick={() => dispatch(updateFilter("all"))}
              value="all"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("high"))}
              value="high"
            >
              High
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("medium"))}
              value="medium"
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              onClick={() => dispatch(updateFilter("low"))}
              value="low"
            >
              Low
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModel></AddTaskModel>
      </div>
      <div className="space-y-5 mt-5">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>
    </div>
  );
}
