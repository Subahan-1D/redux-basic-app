import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  users: IUser[];
}

export const initialState: initialState = {
  users: [
    {
      id: "1",
      name: "Subahan",
    },
  ],
};
type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;

export default userSlice.reducer;
