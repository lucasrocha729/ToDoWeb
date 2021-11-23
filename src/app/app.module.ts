import { LOCALE_ID, NgModule } from "@angular/core";
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
import { FlatpickrModule } from "angularx-flatpickr";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

import { AppComponent } from "./app.component";
import { ToDoListComponent } from "./components/todo/to-do-list/to-do-list.component";
import { ToDoCreateComponent } from "./components/todo/to-do-create/to-do-create.component";
import { ToDoUpdateComponent } from "./components/todo/to-do-update/to-do-update.component";
import { MenuComponent } from "./defaultComponents/menu/menu.component";
import { CreateCategoryComponent } from "./components/category/create-category/create-category.component";
import { CalendarComponent } from "./components/todo/calendar/calendar.component";
import { registerLocaleData } from "@angular/common";
import ptBR from "@angular/common/locales/pt";
registerLocaleData(ptBR);

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoCreateComponent,
    ToDoUpdateComponent,
    MenuComponent,
    CreateCategoryComponent,
    CalendarComponent,
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
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
