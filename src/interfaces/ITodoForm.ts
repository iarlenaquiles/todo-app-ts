import { ITodo } from './ITodo';

export interface ITodoForm {
  todos: ITodo[];
  handleCreate: (todo: ITodo) => void;
}