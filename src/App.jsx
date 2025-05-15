import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {


  return (
    <>
      <div className=" min-h-screen bg-gray-800 gap-3 px-32 py-10 space-y-5">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
