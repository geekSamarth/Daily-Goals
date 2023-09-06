import { useState } from "react";
import Task from "./components/Task";
function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900 box-border">
        <header className="w-full h-10 bg-blue-500 text-white text-lg flex justify-center items-center">
          Get Ready to complete your daily goals.
        </header>

        <div className="w-full max-w-2xl h-auto mx-auto  my-5 overflow-hidden rounded-3xl">
          <h1 className="text-3xl font-bold text-center my-4 ">Daily Goals</h1>
          <div className="bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-violet-500 to-90% p-5 rounded-lg mx-4">
            <form className="flex flex-col ">
              <input
                type="text"
                placeholder="Title"
                className="border-2 border-solid border-gray-200 my-5 py-2 px-5 rounded-md"
              />
              <textarea placeholder="Description" className="border-2 border-solid border-gray-200 rounded-md my-5"></textarea>
              <button
                type="submit"
                className="bg-black text-white py-2 px-2 rounded-md "
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
        <Task />
      </div>
    </>
  );
}

export default App;
