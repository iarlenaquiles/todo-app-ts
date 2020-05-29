import { ITodo } from './ITodo';

export interface ITodoList {
  handleUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleRemove: (id: string)=> void;
  handleComplete: (id: string) => void;
  handleBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: ITodo[];
}
