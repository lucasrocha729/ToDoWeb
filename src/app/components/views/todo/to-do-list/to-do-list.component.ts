import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import ToDo from "src/app/models/ToDo";
import { ToDoService } from "src/app/services/to-do.service";
@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.css"],
})
export class ToDoListComponent implements OnInit {
  toDoList: ToDo[] = [];
  dataTodo: ToDo[] = [];
  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.toDoService.listAllToDo().subscribe((toDo) => {
      this.toDoList = toDo;
      this.dataTodo = this.toDoList;
    });
  }
  displayedColumns: string[] = ["toDoName", "description", "toDoDate"];
}
