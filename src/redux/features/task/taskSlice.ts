import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { v4 as uuidv4 } from 'uuid';
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitilState {
  tasks: ITask[];
  filter: "all" | "high" | "low";
}

export const initialState: InitilState = {
  // schema
  tasks: [],

  filter: "high",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const id = uuidv4();
      const taskData = {
        ...action.payload,
        id,
        isCompleted: false,
      };
      state.tasks.push(taskData);
    },
  },
});

export const { addTask } = taskSlice.actions;
export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
