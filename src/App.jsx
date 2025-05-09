import toast, { Toaster } from "react-hot-toast";
import "./App.css";
import LoginComp from "./components/LoginComp";
import { useEffect, useState } from "react";
import Register from "./components/Register";
import Auth from "./components/Auth";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <div className=" min-h-screen bg-gray-800  gap-3">
        {/* <Auth /> */}
        <div className="w-fit h-full px-32 flex flex-wrap items-center justify-center gap-4 py-12">
          {posts.map((post, index) => (
            <Post data={post} key={index}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
