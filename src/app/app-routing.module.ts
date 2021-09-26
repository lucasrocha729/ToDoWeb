import { ToDoUpdateComponent } from "./components/views/todo/to-do-update/to-do-update.component";
import { ToDoCreateComponent } from "./components/views/todo/to-do-create/to-do-create.component";
import { ToDoListComponent } from "./components/views/todo/to-do-list/to-do-list.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: ToDoListComponent },
  { path: "todo/list", component: ToDoListComponent },
  { path: "todo/create", component: ToDoCreateComponent },
  { path: "todo/update/:id", component: ToDoUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
