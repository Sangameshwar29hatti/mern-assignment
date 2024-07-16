import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo._id, !todo.completed)}
      />
      {todo.text}
      <button onClick={() => removeTodo(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
