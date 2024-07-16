import React, { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Todo } from './types/Todo';
import { getTodos, createTodo, updateTodo, deleteTodo } from './services/todoService';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  const addTodo = async (text: string) => {
    const newTodo = await createTodo(text);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    const updatedTodo = await updateTodo(id, completed);
    setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)));
  };

  const removeTodo = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
