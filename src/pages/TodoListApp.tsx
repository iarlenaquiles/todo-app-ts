import * as React from 'react';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

import { ITodo } from '../interfaces/ITodo';

import '../style/styles.css';

const TodoListApp = () => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);

  React.useEffect(() => {
    const array = localStorage.getItem('todos');
    const parsed = array !== null ? JSON.parse(array) : [];
    const todosSaved: ITodo[] = parsed;
    setTodos(todosSaved)
  }, []);

  function handleCreate(todo: ITodo) {
    const newTodosState: ITodo[] = [...todos];
   
    newTodosState.push(todo);

    setTodos(newTodosState);

    localStorage.setItem("todos", JSON.stringify(newTodosState));
  }

  function handleUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
    const newTodosState: ITodo[] = [...todos];

    newTodosState.find((todo: ITodo) => todo.id === id)!.text = event.target.value;

    setTodos(newTodosState);
    localStorage.setItem("todos", JSON.stringify(newTodosState));
  }

  function handleRemove(id: string) {
    const newTodosState: ITodo[] = todos.filter((todo: ITodo) => todo.id !== id);

    setTodos(newTodosState);
    localStorage.setItem("todos", JSON.stringify(newTodosState));
  }

  function handleComplete(id: string) {
    const newTodosState: ITodo[] = [...todos];

    newTodosState.find((todo: ITodo) => todo.id === id)!.isCompleted = !newTodosState.find((todo: ITodo) => todo.id === id)!.isCompleted;

    setTodos(newTodosState);
    localStorage.setItem("todos", JSON.stringify(newTodosState));
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add('todo-input-error');
    } else {
      event.target.classList.remove('todo-input-error');
    }
  }

  return (
    <div className="todo-list-app">
      <TodoForm
        todos={todos}
        handleCreate={handleCreate}
      />

      <TodoList
        todos={todos}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
        handleBlur={handleBlur}
      />
    </div>
  )
}

export default TodoListApp;