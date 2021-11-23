import { Component, OnInit } from "@angular/core";
import Category from "src/app/models/Category";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-create-category",
  templateUrl: "./create-category.component.html",
  styleUrls: ["./create-category.component.css"],
})
export class CreateCategoryComponent implements OnInit {
  categoryToCreate: Category = { categoryName: "" };
  categoryToEdit: Category = { categoryName: "" };
  dataCategory: Category[] = [];
  edit: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.edit = false;
    this.categoryService.listAllCategory().subscribe((category: any) => {
      this.dataCategory = category;
    });
  }

  displayedColumns: string[] = [
    "categoryName",
    "categoryEdit",
    "categoryDelete",
  ];

  createCategory() {
    console.log(this.categoryToCreate);
    return this.categoryService
      .createCategory(this.categoryToCreate)
      .subscribe(() => {
        window.location.reload();
      });
  }

  deleteCategory(id: number) {
    this.categoryService.deleteToDo(id).subscribe(() => {
      window.location.reload();
    });
  }

  categoryForEdit(categoryEdit: Category) {
    this.edit = true;
    this.categoryToEdit = categoryEdit;
  }

  editCategory(category: Category) {
    this.categoryService.updateCategory(category).subscribe(() => {
      window.location.reload();
    });
  }
}
