import React from "react";
import List from "./List";
import "./TaskManager.css";
import { useState } from "react";

const TaskManager = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [task_object, setTaskObject] = useState({});
  function addTask() {
    const newTaskObject = {
      task: task,
      priority: priority,
    };
    setPriority("");
    setTask("");
    setTaskObject(newTaskObject);
    console.log(task_object);
  }
  return (
    <div className="container">
      <h1>Task Manager</h1>
      <div className="data">
        <label htmlFor="taskInput">Task:</label>
        <input type="text" id="taskInput" value={task} onChange={(e) => setTask(e.target.value)}/>
        <label htmlFor="prioritySelect">Priority:</label>
        <select name="priority" id="prioritySelect" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="default"></option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
      <List task_object={task_object} />
    </div>
  );
};

export default TaskManager;
