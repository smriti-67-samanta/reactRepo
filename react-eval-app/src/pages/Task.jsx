import React, {useState} from "react";

function Task(){

    const[task,setTask]=useState([]);

    function addTask(text){
     setTask([...task,{id:Date.now(),text,completed:false}]);
    }

    return(
        <>
      <h1>This is task page</h1>
      <div>
        <button onClick={()=>addTask("New Task")}>Add Task</button>
        <ul>
            {task.map((task)=>(
                <li key={task.id}>
                    <span>{task.text}</span>
                </li>
            ))}
        </ul>
        <button>Update Task</button>
        <button>Search</button>
      </div>
        </>
    )
}
export default Task;