import React from "react";

function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id} className="task">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Due: {task.dueDate}</p>
          <button onClick={() => onDelete(task._id)}>Delete</button>
          <button onClick={() => onEdit(task._id, { completed: !task.completed })}>
            {task.completed ? "Undo" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
