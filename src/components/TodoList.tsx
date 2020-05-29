import React from 'react';

import TodoItem from './TodoItem';

import { ITodoList } from '../interfaces/ITodoList';

const TodoList = (props: ITodoList) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleUpdate={props.handleUpdate}
              handleRemove={props.handleRemove}
              handleComplete={props.handleComplete}
              handleBlur={props.handleBlur}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;