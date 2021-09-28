import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import ToDo from "../models/ToDo";

@Injectable({
  providedIn: "root",
})
export class ToDoService {
  private BASE_URL = "https://localhost:5001/api/todo";

  constructor(private httpClient: HttpClient) {}

  createToDo(toDo: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(`${this.BASE_URL}/create`, toDo);
  }

  listAllToDo(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(`${this.BASE_URL}/list`);
  }

  getById(id: number): Observable<ToDo> {
    return this.httpClient.get<ToDo>(`${this.BASE_URL}/getById/${id}`);
  }

  updateToDo(toDo: ToDo): Observable<ToDo> {
    return this.httpClient.put<ToDo>(
      `${this.BASE_URL}/update/${toDo.id}`,
      toDo
    );
  }

  deleteToDo(id: number): Observable<ToDo> {
    return this.httpClient.delete<ToDo>(`${this.BASE_URL}/delete/${id}`);
  }
}
