export enum TaskPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High"
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: TaskPriority;
}

export interface AddTaskProps {
  onAddTask: (title: string, priority: TaskPriority) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}