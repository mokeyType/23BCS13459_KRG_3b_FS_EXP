import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./List.css"
const List = ({task_object}) => {
   const [task_list, setTaskList] = useState([]);
   useEffect(() => {
     if (task_object.task && task_object.priority) {
        setTaskList(prevList => [...prevList, task_object]);
     }
   }, [task_object]);
  return (
    <>
    <h2>Task List</h2>
    <div className="list-container">
         {
            task_list.map((task, index) => (
                <div  className="list-item" key={index}>
                    <p>{index + 1}. Task: {task.task}</p>
                    <p>Priority: {task.priority}</p>
                </div>
            ))
         }
    </div>
    </>
  )
}

export default List
