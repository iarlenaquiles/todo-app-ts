export interface ITodo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface ITodoForm {
  todos: ITodo[];
  handleCreate: (todo: ITodo) => void;
}

export interface ITodoList {
  handleUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleRemove: (id: string)=> void;
  handleComplete: (id: string) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: ITodo[]
}

export interface ITodoItem {
  handleUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleRemove: (id: string)=> void;
  handleComplete: (id: string) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: ITodo
}