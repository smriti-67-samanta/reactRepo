import { Task, TaskListProps } from '../types/taskTypes';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one to get started!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <div className="task-info">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(task.id)}
            />
            <span className="task-title">{task.title}</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </div>
          <button 
            onClick={() => onDeleteTask(task.id)}
            className="delete-btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;