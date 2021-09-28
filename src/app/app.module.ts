import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./components/todo/to-do-list/to-do-list.component";
import { ToDoCreateComponent } from "./components/todo/to-do-create/to-do-create.component";
import { ToDoUpdateComponent } from "./components/todo/to-do-update/to-do-update.component";
import { MenuComponent } from "./defaultComponents/menu/menu.component";
import { CreateCategoryComponent } from "./components/category/create-category/create-category.component";

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoCreateComponent,
    ToDoUpdateComponent,
    MenuComponent,
    CreateCategoryComponent,
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
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
