
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: []
};

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    }
  }
});

export const { addTask, removeTask, toggleTask } = taskListSlice.actions;
export default taskListSlice.reducer;