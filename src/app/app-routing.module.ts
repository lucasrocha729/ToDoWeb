import { ToDoUpdateComponent } from "./components/todo/to-do-update/to-do-update.component";
import { ToDoCreateComponent } from "./components/todo/to-do-create/to-do-create.component";
import { ToDoListComponent } from "./components/todo/to-do-list/to-do-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateCategoryComponent } from "./components/category/create-category/create-category.component";
import { CalendarComponent } from "./components/todo/calendar/calendar.component";

const routes: Routes = [
  { path: "", component: CalendarComponent },
  { path: "todo/list", component: ToDoListComponent },
  { path: "todo/create", component: ToDoCreateComponent },
  { path: "todo/update/:id", component: ToDoUpdateComponent },
  { path: "category", component: CreateCategoryComponent },
  { path: "todo/list", component: CalendarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
