import React, { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    // TODO: write code to add a new task
    setTasks((prev) => {
      return [task, ...prev];
    });


  };

  const handleToggleTask = (id) => {
    // TODO: write code to toggle a task's status
    setTasks((prev) => 
      prev.map((task) => task.id === id ? {...task, status: !task.status} : task)
    );


  };

  const handleDeleteTask = (id) => {
    // TODO: write code to delete a task
    setTasks((prev) => 
      prev.filter((task) => task.id !== id)
    );


  };

  return (
    <div className="app">
      <h1>Task Tracker</h1>
      {/*TODO: add a form to add a new task*/}


      <form>

      <input></input>
      <button id="sumbit"></button>

      </form>



      {/*TODO: add a list of tasks*/}
    </div>
  );
}




export default App;
