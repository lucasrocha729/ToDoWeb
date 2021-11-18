import Category from "src/app/models/Category";
export default interface ToDo {
  id?: number;
  toDoName: string;
  description: string;
  toDoDate?: Date;
  toDoStatus?: string;
  categoryId?: number;
  creationDate?: string;
  category?: Category;
  allDay?: boolean;
}
