import React from 'react';
import shortid from 'shortid';

import { ITodo } from '../interfaces/ITodo';
import { ITodoForm } from '../interfaces/ITodoForm';

const TodoForm = (props: ITodoForm) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [formState, setFormState] = React.useState('');

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      const newTodo: ITodo = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      }

      props.handleCreate(newTodo);

      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder='Enter new todo and press enter'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  )
}

export default TodoForm;