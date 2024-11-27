import React from "react";

/**
 * TODO: implement the Task component
 * @function Task
 * @returns {React.Component} A <li> containing the task description and a checkbox to toggle completion
 */




export default function Task(description, status) {
    if (status === true) {
        return (<li
         style = {{textDecoration: "line-through"}}>
            {description}
        
        </li>)
      } 
    if (status === false) {
        return (<li>{description}</li>);
    };
        
}
