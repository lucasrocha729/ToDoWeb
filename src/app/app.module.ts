import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./components/views/todo/to-do-list/to-do-list.component";
import { ToDoCreateComponent } from "./components/views/todo/to-do-create/to-do-create.component";
import { ToDoUpdateComponent } from "./components/views/todo/to-do-update/to-do-update.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./defaultComponents/menu/menu.component";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoCreateComponent,
    ToDoUpdateComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
