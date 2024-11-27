import React from "react";
import Task from "./Task";

export default function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li>
        <input type='checkbox' checked={task.status} onChange={() => onToggleTask(task.id)}></input>  
        <Task
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
        </li>
      ))}
    </ul>
  );
}
