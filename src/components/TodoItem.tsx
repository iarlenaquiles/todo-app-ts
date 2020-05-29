import React from 'react';

import { ITodoItem } from '../interfaces/ITodoItem';

const TodoItem = (props: ITodoItem) => {
  return (
    <div className="todo-item">
      <div onClick={() => props.handleComplete(props.todo.id)}>
        {props.todo.isCompleted ? (
          <span className="todo-item-checked">&#x2714;</span>
        ) : (
          <span className="todo-item-unchecked" />
        )}
      </div>

      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.text}
          onBlur={props.handleBlur}
          className={props.todo.isCompleted ? 'decoration' : ''}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleUpdate(event, props.todo.id)}
        />
      </div>

      <div className="item-remove" onClick={() => props.handleRemove(props.todo.id)}>
        &#x02A2F;
      </div>
    </div>
  )
}

export default TodoItem;