import { Router, RouterModule } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import ToDo from "src/app/models/ToDo";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-to-do-create",
  templateUrl: "./to-do-create.component.html",
  styleUrls: ["./to-do-create.component.css"],
})
export class ToDoCreateComponent implements OnInit {
  toDoCreate: ToDo = { description: "", toDoName: "" };

  constructor(private toDoService: ToDoService, private router: Router) {}

  ngOnInit(): void {}

  createToDo(): void {
    this.toDoService.createToDo(this.toDoCreate).subscribe(() => {
      this.router.navigate(["/todo/list"]);
    });
  }
}
