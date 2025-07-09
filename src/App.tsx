import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import "./index.css";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <Navbar />
      <Outlet />
      <div className="mx-auto max-w-7xl px-5 mt-20 border-">
        <h1>Counter with redux</h1>
        <Button onClick={handleIncrement}>Increment</Button>
        <div>{count}</div>
        <button className="btn btn-primary" onClick={handleDecrement}>Decrement</button>
      </div>
    </>
  );
}

export default App;
