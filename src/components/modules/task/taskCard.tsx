import { Trash } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "@/types";
import { cn } from "@/lib/utils";

export interface IProps {
  task: ITask;
}
export default function TaskCard({ task }: IProps) {
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
          <h1 className="text-lg font-medium text-gray-800">{task.title}</h1>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            variant="ghost"
            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition"
          >
            <Trash className="w-4 h-4" />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
}
