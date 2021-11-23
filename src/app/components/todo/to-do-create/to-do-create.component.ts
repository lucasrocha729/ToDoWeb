import { Router, RouterModule } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import ToDo from "src/app/models/ToDo";
import Category from "src/app/models/Category";
import { ToDoService } from "src/app/services/to-do.service";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-to-do-create",
  templateUrl: "./to-do-create.component.html",
  styleUrls: ["./to-do-create.component.css"],
})
export class ToDoCreateComponent implements OnInit {
  toDoCreate: ToDo = { description: "", toDoName: "" };
  dataCategory: Category[] = [];

  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.listAllCategory().subscribe((category: any) => {
      this.dataCategory = category;
    });
  }

  createToDo(): void {
    this.toDoService.createToDo(this.toDoCreate).subscribe(() => {
      this.router.navigate(["/todo/list"]);
    });
  }
}
