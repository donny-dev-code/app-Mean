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

  .subscribe({
    next: () => {
      console.log(`Tarea ${id} eliminada`);
     // Recarga la lista de tareas
     this.tareas$=this.servicio.getAllTareas();
    },
    error: (error) => console.error('Error al eliminar tarea', error)
  });
}

}
