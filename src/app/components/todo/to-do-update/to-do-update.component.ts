import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import ToDo from "src/app/models/ToDo";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-to-do-update",
  templateUrl: "./to-do-update.component.html",
  styleUrls: ["./to-do-update.component.css"],
})
export class ToDoUpdateComponent implements OnInit {
  toDoForEdit: ToDo = { toDoName: "", description: "" };

  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.toDoForEdit.id = params.id;
      if (this.toDoForEdit.id !== undefined) {
        this.toDoService.getById(this.toDoForEdit.id).subscribe((toDo) => {
          this.toDoForEdit.toDoName! = toDo.toDoName;
          this.toDoForEdit.description = toDo.description;
          this.toDoForEdit.toDoDate = toDo.toDoDate;
          this.toDoForEdit.toDoStatus = toDo.toDoStatus;
          console.log(toDo);
        });
      }
    });
  }
  updateToDo(): void {
    this.toDoService.updateToDo(this.toDoForEdit).subscribe((toDo) => {
      this.router.navigate(["todo/list"]);
    });
  }
}
