import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TareaModel } from '../shared/tarea.model';
import { TareaService } from '../shared/tarea.service';

@Component({
  selector: 'app-tarea-lista',
  templateUrl: './tarea-lista.component.html',
  styleUrl: './tarea-lista.component.css'
})
export class TareaListaComponent implements OnInit{

tareas$: Observable<TareaModel[]>;

constructor(private servicio:TareaService){
 this.tareas$=this.servicio.getAllTareas()
 
}
ngOnInit(): void {
  

}
deleteTarea(id:string){
  this.servicio.deleteTarea(id)
  .subscribe(data=>{console.log(data),error=>console.log(error)});
  
}

}
