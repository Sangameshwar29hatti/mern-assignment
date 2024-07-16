import axios from 'axios';
import { Todo } from '../types/Todo';

const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
  const response = await axios.get<Todo[]>(API_URL);
  return response.data;
};

export const createTodo = async (text: string) => {
  const response = await axios.post<Todo>(API_URL, { text });
  return response.data;
};

export const updateTodo = async (id: string, completed: boolean) => {
  const response = await axios.put<Todo>(`${API_URL}/${id}`, { completed });
  return response.data;
};

export const deleteTodo = async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
};
