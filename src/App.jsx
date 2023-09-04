import { useState } from 'react'
import Task from './components/Task'
function App() {
 

  return (
   <>
   <div className="w-full min-h-screen bg-gray-100 box-border">
    
      <header className='w-full h-10 bg-blue-500 text-white text-lg flex justify-center items-center'>Get Ready to complete your daily goals.</header>
   
    <div className="w-full max-w-3xl h-auto bg-red-200 mx-auto px-20 my-10 overflow-hidden">
      <h1 className='text-3xl font-bold text-center my-10 '>Daily Goals</h1>
      <div className="bg-violet-400">
        <form className='flex flex-col '>
          <input type="text" className='border-2 border-solid border-gray-200 my-5 py-2 px-5'/>
          <textarea className='border-2 border-solid border-gray-200'></textarea>
          <button type='submit'>Add Task</button>
        </form>
      </div>
    <Task />

    </div>
   </div>
   </>
  )
}

export default App
