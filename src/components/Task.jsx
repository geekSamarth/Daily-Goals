import React from "react";

function Task({ title, description, index, deleteTask }) {
  return (
    <div className="w-full max-w-xl flex justify-between items-center mx-auto bg-violet-600 mt-7 rounded-lg px-3 py-2 bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-30% to-violet-500 to-90%">
      <div className="px-2">
        <p className="font-bold text-xl">{title}</p>
        <span className="text-lg">{description}</span>
      </div>
      <button
        className="bg-red-700 text-white px-6 py-2 text-lg font-bold rounded-md hover:bg-red-600"
        onClick={() => deleteTask(index)}
      >
        Del
      </button>
    </div>
  );
}

export default Task;
