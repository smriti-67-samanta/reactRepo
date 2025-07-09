import { Provider } from 'react-redux';
import store from './store';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Todo List</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;