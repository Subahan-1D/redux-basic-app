import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
interface InitilState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

export const initialState: InitilState = {
  // schema
  tasks: [
    {
      id: "1",
      title: "Create Frontend Developer",
      description: "Welcome to github",
      duDate: "12-3-2025",
      isCompleted: false,
      priority: "High",
    },
  ],

  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "duDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },

    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else if (filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else {
    return state.todo.tasks;
  }
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
