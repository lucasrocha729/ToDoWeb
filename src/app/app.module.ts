import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./components/views/todo/to-do-list/to-do-list.component";
import { ToDoCreateComponent } from "./components/views/todo/to-do-create/to-do-create.component";

@NgModule({
  declarations: [AppComponent, ToDoListComponent, ToDoCreateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
