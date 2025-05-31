import React, { useState, useEffect } from 'react';

const TodoPagination = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const todosPerPage = 10;

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        setTodos(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // Calculate current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(todos.length / todosPerPage)));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));

  // Calculate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '20px' }}>Loading todos...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Todo List with Pagination</h2>
      
      <div style={{ marginBottom: '20px' }}>
        {currentTodos.map(todo => (
          <div 
            key={todo.id} 
            style={{ 
              padding: '10px', 
              margin: '5px 0', 
              border: '1px solid #ddd',
              backgroundColor: todo.completed ? '#f0f0f0' : 'white',
              borderRadius: '4px'
            }}
          >
            <input 
              type="checkbox" 
              checked={todo.completed} 
              readOnly 
              style={{ marginRight: '10px' }}
            />
            <span>{todo.title}</span>
          </div>
        ))}
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '5px'
      }}>
        <button 
          onClick={prevPage} 
          disabled={currentPage === 1}
          style={{ 
            padding: '8px 16px', 
            margin: '0 5px', 
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: currentPage === 1 ? '#f1f1f1' : '#4CAF50',
            color: currentPage === 1 ? '#666' : 'white'
          }}
        >
          Previous
        </button>

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => paginate(number)}
            style={{
              padding: '8px 12px',
              backgroundColor: number === currentPage ? '#4CAF50' : '#f1f1f1',
              color: number === currentPage ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              minWidth: '36px'
            }}
          >
            {number}
          </button>
        ))}

        <button 
          onClick={nextPage} 
          disabled={currentPage === pageNumbers.length}
          style={{ 
            padding: '8px 16px', 
            margin: '0 5px', 
            cursor: currentPage === pageNumbers.length ? 'not-allowed' : 'pointer',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: currentPage === pageNumbers.length ? '#f1f1f1' : '#4CAF50',
            color: currentPage === pageNumbers.length ? '#666' : 'white'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TodoPagination;