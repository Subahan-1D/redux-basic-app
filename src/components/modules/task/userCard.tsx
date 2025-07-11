import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import type { IUser } from "@/types";
import { Trash } from "lucide-react";

export interface IProps {
  user: IUser;
}

export default function UserCard({ user }: IProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="border w-[250px] border-gray-200 px-6 py-5 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 bg-white flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <h2 className="font-semibold text-gray-800">{user.name}</h2>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => dispatch(removeUser(user.id))}
            variant="ghost"
            className="p-2 text-red-500 hover:bg-red-100 rounded-full transition"
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
