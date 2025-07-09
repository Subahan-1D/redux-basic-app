import Logo from "@/assets/toto morij.jpg";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5">
      <div className="flex items-center">
        <img src={Logo} className="h-10 mx-auto" alt="company logo" />{" "}
        <h1 className="font-bold ml-2">Task</h1>Master
      </div>
      <Link to="/users">User</Link>
      <Link to="/">Task</Link>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
