import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Category from "src/app/models/Category";
import ToDo from "src/app/models/ToDo";
import { CategoryService } from "src/app/services/category.service";
import { ToDoService } from "src/app/services/to-do.service";

@Component({
  selector: "app-to-do-update",
  templateUrl: "./to-do-update.component.html",
  styleUrls: ["./to-do-update.component.css"],
})
export class ToDoUpdateComponent implements OnInit {
  toDoForEdit: ToDo = { toDoName: "", description: "" };
  dataCategory: Category[] = [];

  constructor(
    private toDoService: ToDoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.toDoForEdit.id = params.id;
      if (this.toDoForEdit.id !== undefined) {
        this.toDoService.getById(this.toDoForEdit.id).subscribe((toDo) => {
          this.toDoForEdit.toDoName! = toDo.toDoName;
          this.toDoForEdit.description = toDo.description;
          this.toDoForEdit.categoryName = toDo.categoryName;
          this.toDoForEdit.toDoDate = toDo.toDoDate;
          this.toDoForEdit.toDoDateEnd = toDo.toDoDateEnd;
          this.toDoForEdit.toDoStatus = toDo.toDoStatus;
          this.toDoForEdit.categoryId = toDo.categoryId;
        });
      }
    });
    this.categoryService.listAllCategory().subscribe((category: any) => {
      this.dataCategory = category;
    });
  }
  updateToDo(): void {
    this.toDoService.updateToDo(this.toDoForEdit).subscribe((toDo) => {
      this.router.navigate(["todo/list"]);
    });
  }
}
