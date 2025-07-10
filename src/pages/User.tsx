import UserCard from "@/components/modules/task/userCard";
import AddUserModel from "@/components/modules/userAddModel";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

export default function User() {
  const users = useAppSelector(selectUsers);

  console.log(users);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end gap-3.5 items-center">
        <h1 className="mr-auto"> User Task</h1>
        <AddUserModel />
      </div>
      <div className="space-y-5 mt-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
