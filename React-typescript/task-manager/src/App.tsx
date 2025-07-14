import { useState } from 'react';
import { Task, TaskPriority } from './types/taskTypes';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, priority: TaskPriority) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <AddTask onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onToggleComplete={toggleComplete}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;