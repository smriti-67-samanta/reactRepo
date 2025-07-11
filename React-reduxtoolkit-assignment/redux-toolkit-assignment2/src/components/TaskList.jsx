
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, toggleTask } from '../features/taskList/taskListSlice';

const TaskList = () => {
  const [newTaskText, setNewTaskText] = useState('');
  const tasks = useSelector((state) => state.taskList.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      dispatch(addTask(newTaskText));
      setNewTaskText('');
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <div className="task-input">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span onClick={() => dispatch(toggleTask(task.id))}>
              {task.text}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;