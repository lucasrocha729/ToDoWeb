import Category from "src/app/models/Category";
export default interface ToDo {
  id?: number;
  toDoName: string;
  description: string;
  toDoDate?: Date;
  toDoDateEnd?: Date;
  toDoStatus?: string;
  categoryId?: number;
  categoryName?: string;
}
