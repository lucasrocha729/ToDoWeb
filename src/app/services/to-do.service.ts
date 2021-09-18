import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import ToDo from "../models/ToDo";

@Injectable({
  providedIn: "root",
})
export class ToDoService {
  private BASE_URL = "https://localhost:5001/api";

  constructor(private httpClient: HttpClient) {}

  createToDo(toDo: ToDo): Observable<ToDo> {
    return this.httpClient.post<ToDo>(`${this.BASE_URL}/todo/create`, toDo);
  }

  listAllToDo(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(`${this.BASE_URL}/todo/list`);
  }
}
