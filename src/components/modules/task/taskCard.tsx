import { Trash } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";

export interface IProps {
  task: ITask;
}
export default function TaskCard({ task }: IProps) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUsers);

  const assignedUser = user.find((user) => user.id === task.assignedTo);

  return (
    <div className="border border-gray-200 px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div
            className={cn("w-3 h-3 rounded-full ", {
              "bg-green-500": task.priority === "Low",
              "bg-red-500": task.priority === "High",
              "bg-blue-500": task.priority === "Medium",
            })}
          ></div>
          <h1
            className={cn("text-lg font-medium text-gray-800", {
              "line-through": task.isCompleted,
            })}
          >
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="ghost"
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
          >
            <Trash className="w-4 h-4" />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p>AssignedTo - {assignedUser ? assignedUser.name : "No One"}</p>
      <p>{task.description}</p>
    </div>
  );
}
