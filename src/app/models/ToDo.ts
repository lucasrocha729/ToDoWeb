export default interface ToDo {
  id?: number;
  toDoName: string;
  description: string;
  toDoDate?: Date;
  toDoStatus?: string;
  toDoCategory?: string;
  creationDate?: string;
}
