import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    setDescription(e.target.value);

    const newTask = {
      id: Date.now(),
      description,
      status: false     
    };

    onAddTask(newTask);
    return (setDescription(""))


  };

  return (
    /*TODO: add a form to add a new task*/
    <form onSubmit={handleSubmit}>

    <input
      type="text"
      placeholder="task.."
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      >
    </input>

    <button id="submit">add task</button>



    </form>

    


    
  );
}
