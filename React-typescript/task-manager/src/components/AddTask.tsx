import { useState } from 'react';
import { TaskPriority, AddTaskProps } from '../types/taskTypes';

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.MEDIUM);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title, priority);
      setTitle('');
      setPriority(TaskPriority.MEDIUM);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title..."
        required
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as TaskPriority)}
      >
        {Object.values(TaskPriority).map((priority) => (
          <option key={priority} value={priority}>
            {priority}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;