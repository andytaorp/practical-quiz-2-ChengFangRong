import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */



export default function Task({ task, onToggleTask, onDeleteTask }) {
    return (
      <li>
        <input style =  {{textDecoration: "line-through"}}
          type="checkbox" checked={task.completed} onChange={() => onToggleTask(task.id)} 
        />
          {task.description}

        <button onClick={() => onDeleteTask(task.id)} >
          delete
        </button>
      </li>
    );
  }