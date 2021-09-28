import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import ToDo from "src/app/models/ToDo";
import { ToDoService } from "src/app/services/to-do.service";
@Component({
  selector: "app-to-do-list",
  templateUrl: "./to-do-list.component.html",
  styleUrls: ["./to-do-list.component.css"],
})
export class ToDoListComponent implements OnInit {
  dataTodo: ToDo[] = [];
  constructor(private toDoService: ToDoService) {}

  ngOnInit(): void {
    this.toDoService.listAllToDo().subscribe((toDo) => {
      this.dataTodo = toDo;
    });
  }

  toDoDelete(id: number): void {
    console.log(typeof id);
    this.toDoService.deleteToDo(id).subscribe(() => {
      window.location.reload();
    });
  }

  displayedColumns: string[] = [
    "toDoName",
    "description",
    "toDoCategory",
    "toDoDate",
    "toDoStatus",
    "toDoEdit",
    "toDoDelete",
  ];
}
