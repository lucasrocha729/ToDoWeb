import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Category from "../models/Category";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private BASE_URL = "https://localhost:5001/api/category";

  constructor(private httpClient: HttpClient) {}

  createCategory(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(`${this.BASE_URL}/create`, category);
  }

  listAllCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.BASE_URL}/list`);
  }

  getById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.BASE_URL}/getById/${id}`);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.httpClient.put<Category>(
      `${this.BASE_URL}/update/${category.id}`,
      category
    );
  }

  deleteToDo(id: number): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.BASE_URL}/delete/${id}`);
  }
}
