import { useEffect, useState } from "react";
import Task from "./components/Task";
function App() {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title: title, description: description }]);
    setTitle("");
    setDescription("");
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    });
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <div className="w-full min-h-screen bg-stone-950 box-border pb-10">
        <header className="w-full h-10 bg-blue-500 text-white text-lg flex justify-center items-center">
          Get Ready to complete your daily goals.
        </header>

        <div className="w-full max-w-2xl h-auto mx-auto  overflow-hidden">
          <h1 className="text-4xl font-bold text-center my-4 text-green-400">
            Daily Goals
          </h1>
          <div className="bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-violet-500 to-90% p-3 rounded-lg mx-3">
            <form className="flex flex-col" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Title"
                className="border-2 border-solid border-gray-400 mb-5 py-2 px-5 rounded-md outline-none focus:border-2 focus:border-solid focus:border-black text-lg"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <textarea
                placeholder="Description"
                className="border-2 border-solid border-gray-400 rounded-md mb-5 py-2 px-5 outline-none focus:border-2 focus:border-solid focus:border-black h-12 text-lg"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white py-2 px-2 rounded-md text-2xl hover:bg-slate-950"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
        {tasks &&
          tasks?.map((item, index) => (
            <Task
              key={index}
              title={item.title}
              description={item.description}
              deleteTask={deleteTask}
              index={index}
            />
          ))}
      </div>
    </>
  );
}

export default App;
