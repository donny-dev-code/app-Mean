import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaModel } from './tarea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  

  constructor(private http:HttpClient) { }
  getAllTareas(){
    return this.http.get<TareaModel[]>('http://localhost:3000/api/tareas');
  }
  getTarea(id: string): Observable<TareaModel> {
    return this.http.get<TareaModel>(`http://localhost:3000/api/tareas/${id}`);
  }
  
  addTarea(tarea:TareaModel){
    return this.http.post<TareaModel>('http://localhost:3000/api/tareas',tarea);
  }
  updateTarea(tarea:TareaModel){
  return this.http.put<TareaModel>(`http://localhost:3000/api/tareas/${tarea._id}`, tarea);

  }
  deleteTarea(id: string)
  {return this.http.delete<string>(`http://localhost:3000/api/tareas/${id}`);
}
  
  }



