import React, { useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  
  const addTask = () => {
    setTasks([...tasks, task]);
    setTask('');
  };
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        className="p-2 mt-2 border border-gray-300"
        placeholder="Enter task"
      />
      <button 
        onClick={addTask} 
        className="ml-2 p-2 bg-blue-500 text-white"
      >
        Add Task
      </button>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 bg-white mt-2 border-b">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
