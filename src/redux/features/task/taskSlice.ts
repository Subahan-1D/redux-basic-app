import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
interface InitilState {
  tasks: ITask[];
  filter: "all" | "high" | "low";
}

export const initialState: InitilState = {
  // schema
  tasks: [
    {
      id: "123456321333",
      title: "initialize frontend",
      description: "Create Home page and description",
      duDate: "12-2-2025",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "123456334333",
      title: "initialize github repository",
      description: "Create github description",
      duDate: "12-2-2025",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "12345633343",
      title: "initialize redux documentation",
      description: "Create redux description",
      duDate: "12-2-2025",
      isCompleted: false,
      priority: "Low",
    },
  ],

  filter: "high",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
