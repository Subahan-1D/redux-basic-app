import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "users",
        Component: User,
      },
      {
        index: true,
        Component: Task,
      },
    ],
  },
]);

export default router;
